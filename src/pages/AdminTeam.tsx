import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Plus,
  Pencil,
  Trash2,
  Check,
  X,
  Loader2,
  Upload,
  ChevronDown,
  ChevronUp,
  User,
  Crown,
  Search,
  ArrowUp,
  ArrowDown,
  Image as ImageIcon,
} from 'lucide-react';
import {
  getAllTeamMembers,
  saveTeamMember,
  deleteTeamMember,
  type TeamMember,
} from '../lib/teamMembers';
import { uploadToCloudinary } from '../lib/cloudinary';
import { saveSiteImage, getMediaLibrary } from '../lib/siteImages';
import { cn } from '../lib/utils';

const EMPTY_FORM: Omit<TeamMember, 'id'> = {
  name: '',
  role: '',
  imageSlot: '',
  bio: '',
  motto: '',
  isLeader: false,
  order: 0,
};

export default function AdminTeam() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [media, setMedia] = useState<{ slot: string; url: string; label: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<TeamMember, 'id'>>(EMPTY_FORM);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [team, imgs] = await Promise.all([getAllTeamMembers(), getMediaLibrary()]);
      setMembers(team);
      setMedia(imgs.filter((i) => i.url).map((i) => ({ slot: i.slot, url: i.url, label: i.label })));
    } catch {
      setError('Failed to load team data.');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(''), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setImagePreview(null);
    setEditingId(null);
    setShowForm(false);
    setShowMediaPicker(false);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const startEdit = (m: TeamMember) => {
    setForm({
      name: m.name,
      role: m.role,
      imageSlot: m.imageSlot,
      bio: m.bio,
      motto: m.motto || '',
      isLeader: m.isLeader,
      order: m.order,
    });
    setImagePreview(
      m.imageSlot ? media.find((im) => im.slot === m.imageSlot)?.url || null : null,
    );
    setEditingId(m.id);
    setShowForm(true);
    setShowMediaPicker(false);
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setUploading(true);
    setError('');
    try {
      const result = await uploadToCloudinary(file, 'obomocare/team');
      const slotId = `team_${Date.now()}`;
      await saveSiteImage(slotId, result.secure_url, 'team-member');
      setForm((f) => ({ ...f, imageSlot: slotId }));
      setImagePreview(result.secure_url);
      setMedia((prev) => [...prev, { slot: slotId, url: result.secure_url, label: 'team-member' }]);
    } catch (err: any) {
      setError(err.message || 'Image upload failed.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageUpload(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      setError('Name and role are required.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const newId = editingId || `${Date.now()}_${Math.random().toString(36).slice(2)}`;
      await saveTeamMember({
        id: newId,
        name: form.name.trim(),
        role: form.role.trim(),
        imageSlot: form.imageSlot,
        bio: form.bio,
        motto: form.motto,
        isLeader: form.isLeader,
        order: form.order,
      });
      setSuccess(editingId ? 'Member updated.' : 'Member added.');
      await loadData();
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to save member.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTeamMember(id);
      setSuccess('Member deleted.');
      await loadData();
      setConfirmDelete(null);
    } catch (err: any) {
      setError(err.message || 'Failed to delete member.');
    }
  };

  const handleReorder = async (id: string, direction: 'up' | 'down') => {
    const sorted = [...members].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((m) => m.id === id);
    if (idx < 0) return;
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const a = sorted[idx];
    const b = sorted[swapIdx];
    try {
      await Promise.all([
        saveTeamMember({ ...a, order: b.order }),
        saveTeamMember({ ...b, order: a.order }),
      ]);
      await loadData();
    } catch {
      setError('Failed to reorder.');
    }
  };

  const selectExistingImage = (slot: string, url: string) => {
    setForm((f) => ({ ...f, imageSlot: slot }));
    setImagePreview(url);
    setShowMediaPicker(false);
  };

  const getMemberImage = (member: TeamMember): string | null => {
    if (member.imageSlot) {
      const found = media.find((im) => im.slot === member.imageSlot);
      if (found) return found.url;
    }
    return null;
  };

  const filtered = [...members]
    .sort((a, b) => a.order - b.order)
    .filter((m) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        (m.bio && m.bio.toLowerCase().includes(q))
      );
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Team Members</h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            Add, edit, reorder, and upload photos for each team member.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-on-surface-variant">
            {members.length} member{members.length !== 1 ? 's' : ''}
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <Plus size={16} /> Add Member
          </button>
        </div>
      </div>

      {success && (
        <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
          <Check size={16} /> {success}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-medium">
          <X size={16} /> {error}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-outline-variant/20 p-6 space-y-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display font-bold text-primary">
              {editingId ? 'Edit Member' : 'New Member'}
            </h3>
            <button type="button" onClick={resetForm} className="text-on-surface-variant hover:text-primary transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Dr. Jane Doe"
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Role / Title *</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                placeholder="e.g. Executive Director"
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1.5">Bio</label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
              rows={4}
              placeholder="Full biographical description..."
              className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container resize-y"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Motto (optional)</label>
              <input
                type="text"
                value={form.motto}
                onChange={(e) => setForm((f) => ({ ...f, motto: e.target.value }))}
                placeholder='e.g. "Serving with Dignity"'
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Display Order</label>
              <input
                type="number"
                value={form.order}
                onChange={(e) => setForm((f) => ({ ...f, order: parseInt(e.target.value) || 0 }))}
                min={0}
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.isLeader}
                onChange={(e) => setForm((f) => ({ ...f, isLeader: e.target.checked }))}
                className="w-5 h-5 rounded border-outline-variant accent-primary-container"
              />
              <div>
                <span className="text-sm font-semibold text-on-surface">Featured Leader</span>
                <p className="text-xs text-on-surface-variant">Show in Leadership Profiles section</p>
              </div>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Photo</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className="flex-1"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-outline-variant/40 rounded-xl cursor-pointer hover:border-secondary-container hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    {uploading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <Upload size={18} />
                        <span className="text-sm font-medium">Upload photo</span>
                        <span className="text-xs text-on-surface-variant/60">or drag & drop</span>
                      </>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              {imagePreview && (
                <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-outline-variant/20 flex-shrink-0">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setForm((f) => ({ ...f, imageSlot: '' }));
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs font-bold hover:bg-black/50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowMediaPicker(!showMediaPicker)}
              className="mt-3 flex items-center gap-2 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              <ImageIcon size={14} />
              {showMediaPicker ? 'Hide media library' : 'Choose from media library'}
            </button>

            {showMediaPicker && media.length > 0 && (
              <div className="mt-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wider">Media Library</p>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 max-h-48 overflow-y-auto">
                  {media.map((im) => (
                    <button
                      key={im.slot}
                      type="button"
                      onClick={() => selectExistingImage(im.slot, im.url)}
                      className={cn(
                        'w-full aspect-square rounded-lg overflow-hidden border-2 transition-all hover:opacity-80',
                        form.imageSlot === im.slot
                          ? 'border-primary-container ring-2 ring-primary-container/30'
                          : 'border-outline-variant/20',
                      )}
                      title={im.label}
                    >
                      <img src={im.url} alt={im.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
            <button
              type="submit"
              disabled={saving || uploading}
              className="flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
            >
              {saving ? (
                <><Loader2 className="animate-spin" size={16} /> Saving...</>
              ) : (
                <><Check size={16} /> {editingId ? 'Update Member' : 'Add Member'}</>
              )}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search members by name, role, or bio..."
          className="w-full pl-9 pr-4 py-2.5 border border-outline-variant/30 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-container"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-secondary-container" size={32} />
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-outline-variant/20 p-12 text-center">
          <User size={48} className="mx-auto text-outline-variant/40 mb-4" />
          <p className="text-on-surface-variant text-lg font-medium">
            {search ? 'No matching members' : 'No team members yet'}
          </p>
          <p className="text-on-surface-variant text-sm opacity-60 mt-1">
            {search ? 'Try a different search.' : 'Click "Add Member" to get started.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((member, idx) => {
            const imgUrl = getMemberImage(member);
            return (
              <div
                key={member.id}
                className={cn(
                  'bg-white rounded-xl border transition-all',
                  confirmDelete === member.id
                    ? 'border-red-300 ring-2 ring-red-100'
                    : 'border-outline-variant/20 hover:shadow-md',
                )}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="flex flex-col gap-0.5 flex-shrink-0">
                    <button
                      onClick={() => handleReorder(member.id, 'up')}
                      disabled={idx === 0}
                      className="p-0.5 text-on-surface-variant/40 hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                      title="Move up"
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      onClick={() => handleReorder(member.id, 'down')}
                      disabled={idx === filtered.length - 1}
                      className="p-0.5 text-on-surface-variant/40 hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                      title="Move down"
                    >
                      <ArrowDown size={14} />
                    </button>
                  </div>

                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0 border border-outline-variant/15">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={22} className="text-outline-variant/30" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-primary truncate">{member.name}</h3>
                      {member.isLeader && (
                        <span className="flex-shrink-0 px-2 py-0.5 bg-secondary-container text-on-primary text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                          <Crown size={10} /> Leader
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-on-surface-variant truncate">{member.role}</p>
                    {member.motto && (
                      <p className="text-xs text-primary/70 italic truncate mt-0.5">"{member.motto}"</p>
                    )}
                    {member.bio && (
                      <p className="text-xs text-on-surface-variant/60 truncate mt-0.5">{member.bio}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => startEdit(member)}
                      className="w-9 h-9 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-secondary-container hover:text-on-primary transition-colors"
                      title="Edit"
                    >
                      <Pencil size={14} />
                    </button>
                    {confirmDelete === member.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(member.id)}
                          className="px-3 h-9 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="px-3 h-9 border border-outline-variant/30 text-xs font-bold rounded-lg hover:bg-surface-container-low transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete(member.id)}
                        className="w-9 h-9 rounded-lg border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
