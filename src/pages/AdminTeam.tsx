import React, { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Pencil,
  Trash2,
  GripVertical,
  Check,
  X,
  Loader2,
  ImagePlus,
  Upload,
  ChevronDown,
  ChevronUp,
  User,
  Crown,
} from 'lucide-react';
import {
  getAllTeamMembers,
  saveTeamMember,
  deleteTeamMember,
  type TeamMember,
} from '../lib/teamMembers';
import { uploadToCloudinary } from '../lib/cloudinary';
import { getMediaLibrary } from '../lib/siteImages';
import { cn } from '../lib/utils';

const EMPTY: Omit<TeamMember, 'id'> = {
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
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<TeamMember, 'id'>>(EMPTY);
  const [bioInput, setBioInput] = useState('');
  const [mottoInput, setMottoInput] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadData = async () => {
    setLoading(true);
    const [team, imgs] = await Promise.all([getAllTeamMembers(), getMediaLibrary()]);
    setMembers(team);
    setMedia(imgs.map((i) => ({ slot: i.slot, url: i.url, label: i.label })));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setForm(EMPTY);
    setBioInput('');
    setMottoInput('');
    setImagePreview(null);
    setEditingId(null);
    setShowForm(false);
    if (inputRef.current) inputRef.current.value = '';
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
    setBioInput(m.bio);
    setMottoInput(m.motto || '');
    setImagePreview(
      m.imageSlot
        ? media.find((im) => im.slot === m.imageSlot)?.url ||
          media.find((im) => im.label.toLowerCase() === m.name.toLowerCase())?.url ||
          null
        : null
    );
    setEditingId(m.id);
    setShowForm(true);
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setUploading(true);
    try {
      const result = await uploadToCloudinary(file, 'obomocare/team');
      const slotId = `team_${Date.now()}`;
      const { saveSiteImage } = await import('../lib/siteImages');
      await saveSiteImage(slotId, result.secure_url, 'team-member');
      setForm((f) => ({ ...f, imageSlot: slotId }));
      setImagePreview(result.secure_url);
      setMedia((prev) => [...prev, { slot: slotId, url: result.secure_url, label: 'team-member' }]);
    } catch (err: any) {
      setError(err.message || 'Image upload failed');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
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
      bio: bioInput,
      motto: mottoInput,
      isLeader: form.isLeader,
      order: form.order,
    });
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
      await loadData();
      setConfirmDelete(null);
    } catch (err: any) {
      setError(err.message || 'Failed to delete member.');
    }
  };

  const selectExistingImage = (slot: string, url: string) => {
    setForm((f) => ({ ...f, imageSlot: slot }));
    setImagePreview(url);
  };

  const sorted = [...members].sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Team Members</h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            Manage profiles, bios, photos, and leadership assignments.
          </p>
        </div>
        <div className="text-sm text-on-surface-variant">{members.length} member{members.length !== 1 ? 's' : ''} total</div>
      </div>

      <div className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden mb-6">
        <button
          onClick={() => {
            resetForm();
            setShowForm(!showForm);
          }}
          className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary-container text-on-primary flex items-center justify-center">
              {showForm ? <X size={16} /> : <Plus size={16} />}
            </div>
            <span className="font-display font-bold text-primary">
              {showForm ? 'Cancel' : 'Add Team Member'}
            </span>
          </div>
          {showForm ? <ChevronUp size={20} className="text-on-surface-variant" /> : <ChevronDown size={20} className="text-on-surface-variant" />}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="px-6 pb-6 border-t border-outline-variant/10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
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
              <div className="flex items-end">
                <label className="flex items-center gap-3 pb-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.isLeader}
                    onChange={(e) => setForm((f) => ({ ...f, isLeader: e.target.checked }))}
                    className="w-5 h-5 rounded border-outline-variant accent-primary-container"
                  />
                  <div>
                    <span className="text-sm font-semibold text-on-surface">Featured Leader</span>
                    <p className="text-xs text-on-surface-variant">Shows in the Leadership Profiles section</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Bio</label>
              <textarea
                value={bioInput}
                onChange={(e) => setBioInput(e.target.value)}
                rows={4}
                placeholder="Full biographical description..."
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container resize-y"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1.5">Motto (optional)</label>
              <input
                type="text"
                value={mottoInput}
                onChange={(e) => setMottoInput(e.target.value)}
                placeholder='e.g. "Serving with Dignity"'
                className="w-full px-4 py-2.5 border border-outline-variant/40 rounded-lg text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Photo</label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-outline-variant/40 rounded-xl cursor-pointer hover:border-secondary-container hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      {uploading ? <Loader2 className="animate-spin" size={20} /> : <><Upload size={18} /><span className="text-sm font-medium">Upload new photo</span></>}
                    </div>
                    <input
                      ref={inputRef}
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
                  <div className="w-32 h-32 rounded-xl overflow-hidden border border-outline-variant/20 flex-shrink-0">
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
            </div>

            {imagePreview && media.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase tracking-wider">Or choose from existing media</p>
                <div className="flex gap-2 flex-wrap">
                  {media.map((im) => (
                    <button
                      key={im.slot}
                      type="button"
                      onClick={() => selectExistingImage(im.slot, im.url)}
                      className={cn(
                        'w-14 h-14 rounded-lg overflow-hidden border-2 transition-all',
                        form.imageSlot === im.slot
                          ? 'border-primary-container ring-2 ring-primary-container/30'
                          : 'border-outline-variant/20 hover:border-outline-variant/50'
                      )}
                    >
                      <img src={im.url} alt={im.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 bg-secondary-container text-on-primary font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
              >
                {saving ? <><Loader2 className="animate-spin" size={16} /> Saving...</> : <><Check size={16} /> {editingId ? 'Update Member' : 'Add Member'}</>}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="px-4 py-2.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-secondary-container" size={32} />
        </div>
      ) : sorted.length === 0 ? (
        <div className="bg-white rounded-xl border border-outline-variant/20 p-12 text-center">
          <User size={48} className="mx-auto text-outline-variant/40 mb-4" />
          <p className="text-on-surface-variant text-lg font-medium">No team members yet</p>
          <p className="text-on-surface-variant text-sm opacity-60 mt-1">Click "Add Team Member" above to get started.</p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {sorted.map((member) => (
              <div
                key={member.id}
                className={cn(
                  'bg-white rounded-xl border transition-all',
                  confirmDelete === member.id
                    ? 'border-red-300 ring-2 ring-red-100'
                    : 'border-outline-variant/20 hover:shadow-md'
                )}
              >
                <div className="flex items-center gap-4 p-4">
                  <span className="text-on-surface-variant/40 cursor-grab flex-shrink-0">
                    <GripVertical size={18} />
                  </span>
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0 border border-outline-variant/15">
                {member.imageSlot ? (
                  <img
                    src={media.find((im) => im.slot === member.imageSlot)?.url || 'https://res.cloudinary.com/dilrcexxe/image/upload/obomocare/team'}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget.style.display = 'none'); }}
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
                        <span className="flex-shrink-0 px-2 py-0.5 bg-secondary-container text-on-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                          Leader
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-on-surface-variant truncate">{member.role}</p>
                    {member.motto && <p className="text-xs text-primary/70 italic truncate mt-0.5">"{member.motto}"</p>}
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
                          Yes
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="px-3 h-9 border border-outline-variant/30 text-xs font-bold rounded-lg hover:bg-surface-container-low transition-colors"
                        >
                          No
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
            ))}
          </div>
        </>
      )}
    </>
  );
}
