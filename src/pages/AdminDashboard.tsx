import React, { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, Check, Loader2, ImagePlus, ChevronDown, ChevronRight, Users, Camera, LayoutGrid, Eye, Pencil, X } from 'lucide-react';
import { uploadToCloudinary } from '../lib/cloudinary';
import { IMAGES } from '../lib/images';
import {
  saveSiteImage,
  removeSiteImage,
  onSnapshot,
  collection,
  db,
} from '../lib/siteImages';
import { cn } from '../lib/utils';

interface PhotoSlot {
  id: string;
  label: string;
  description: string;
}

interface PhotoSection {
  key: string;
  label: string;
  icon: React.ReactNode;
  slots: PhotoSlot[];
}

const INITIAL_SECTIONS: PhotoSection[] = [
  {
    key: 'team',
    label: 'Team Members',
    icon: <Users size={20} />,
    slots: [
      { id: 'team_0', label: 'Dr. Ombati Timothy Mokua', description: 'Executive Director & Founder' },
      { id: 'team_1', label: 'Ms. Naomi Kerubo Akuma', description: 'Director of Logistics & Community Outreach' },
      { id: 'team_2', label: 'Fredah Kwamboka Onduso', description: 'Team Member' },
      { id: 'team_3', label: 'Cecil Miller', description: 'Team Member' },
      { id: 'team_4', label: 'Josephat Mose', description: 'Team Member' },
    ],
  },
  {
    key: 'community',
    label: 'Community Engagement',
    icon: <Camera size={20} />,
    slots: [
      { id: 'team_5', label: 'Naomi & Fredah with Huldah Momanyi', description: 'Meeting photo — Minnesota State Capitol' },
      { id: 'team_6', label: 'Josephat with Huldah Momanyi', description: 'Meeting photo — Leadership meeting' },
    ],
  },
  {
    key: 'heroes',
    label: 'Page Heroes',
    icon: <LayoutGrid size={20} />,
    slots: [
      { id: 'homeHero', label: 'Home Hero', description: 'Main hero banner on homepage' },
      { id: 'aboutHero', label: 'About Hero', description: 'Hero image on About page' },
      { id: 'contactHero', label: 'Contact Hero', description: 'Hero image on Contact page' },
      { id: 'impactHero', label: 'Impact Hero', description: 'Hero image on Impact page' },
      { id: 'getInvolvedHero', label: 'Get Involved Hero', description: 'Hero image on Get Involved page' },
      { id: 'storiesHero', label: 'Stories Hero', description: 'Hero image on Stories page' },
    ],
  },
  {
    key: 'programs',
    label: 'Programs',
    icon: <LayoutGrid size={20} />,
    slots: [
      { id: 'foodSupport', label: 'Food Support', description: 'Food support program image' },
      { id: 'foodSupportDetail', label: 'Food Support Detail', description: 'Food support detail page' },
      { id: 'maternalHealth', label: 'Maternal Health', description: 'Maternal health program image' },
      { id: 'maternalHealthDetail', label: 'Maternal Health Detail', description: 'Maternal health detail page' },
      { id: 'householdCare', label: 'Household Care', description: 'Household care program image' },
      { id: 'householdCareDetail', label: 'Household Care Detail', description: 'Household care detail page' },
      { id: 'volunteerCorps', label: 'Volunteer Corps', description: 'Volunteer corps program image' },
      { id: 'volunteerCorpsDetail', label: 'Volunteer Corps Detail', description: 'Volunteer corps detail page' },
      { id: 'elderlySupport', label: 'Elderly Support', description: 'Elderly support program image' },
      { id: 'elderlySupportDetail', label: 'Elderly Support Detail', description: 'Elderly support detail page' },
    ],
  },
];

function PhotoSlotCard({
  slot,
  currentUrl,
  onSave,
  onDelete,
  isEditing,
  editLabel,
  editDesc,
  onLabelChange,
  onDescChange,
  onEditStart,
  onEditConfirm,
  onEditCancel,
}: {
  slot: PhotoSlot;
  currentUrl: string | null;
  onSave: (slotId: string, url: string) => Promise<void>;
  onDelete: (slotId: string) => Promise<void>;
  isEditing?: boolean;
  editLabel?: string;
  editDesc?: string;
  onLabelChange?: (val: string) => void;
  onDescChange?: (val: string) => void;
  onEditStart?: () => void;
  onEditConfirm?: () => void;
  onEditCancel?: () => void;
  [key: string]: unknown;
}) {
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isEditable = slot.id.startsWith('team_');

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
    setError('');
    setUploading(true);
    try {
      const result = await uploadToCloudinary(file, 'obomocare');
      setSaving(true);
      await onSave(slot.id, result.secure_url);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className={cn('bg-white rounded-xl border overflow-hidden transition-all', success ? 'border-green-400 ring-2 ring-green-100' : 'border-outline-variant/20 hover:shadow-md')}>
      <div className="aspect-[4/3] w-full bg-surface-container-low relative overflow-hidden">
        {currentUrl ? (
          <img src={currentUrl} alt={slot.label} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImagePlus size={32} className="text-outline-variant/40" />
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Loader2 className="animate-spin text-white" size={28} />
          </div>
        )}
      </div>
      <div className="p-3">
        {isEditing ? (
          <div className="space-y-2 mb-3">
            <input
              type="text"
              value={editLabel}
              onChange={(e) => onLabelChange?.(e.target.value)}
              className="w-full px-2 py-1.5 text-xs border border-primary-container rounded-md bg-surface focus:outline-none focus:ring-1 focus:ring-primary-container"
              placeholder="Name"
            />
            <input
              type="text"
              value={editDesc}
              onChange={(e) => onDescChange?.(e.target.value)}
              className="w-full px-2 py-1.5 text-xs border border-outline-variant/30 rounded-md bg-surface focus:outline-none focus:ring-1 focus:ring-outline"
              placeholder="Role"
            />
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={onEditConfirm}
                className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-green-500 text-white text-[10px] font-bold rounded-md hover:bg-green-600"
              >
                <Check size={12} /> Save
              </button>
              <button
                type="button"
                onClick={onEditCancel}
                className="flex-1 flex items-center justify-center gap-1 py-1.5 border border-outline-variant/30 text-[10px] font-bold rounded-md hover:bg-surface-container-low"
              >
                <X size={12} /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-1 mb-1">
              <div className="text-sm font-bold text-primary truncate flex-1">{slot.label}</div>
              {isEditable && (
                <button
                  onClick={onEditStart}
                  className="flex-shrink-0 p-1 rounded hover:bg-secondary-container/20 text-on-surface-variant hover:text-primary transition-colors"
                  title="Edit name/role"
                >
                  <Pencil size={12} />
                </button>
              )}
            </div>
            <div className="text-xs text-on-surface-variant truncate mb-3">{slot.description}</div>
          </>
        )}
        <div className="flex items-center gap-2">
          <label className="flex-1">
            <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
            <span className={cn('flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-bold cursor-pointer transition-colors', success ? 'bg-green-500 text-white' : 'bg-secondary-container text-on-primary hover:opacity-90')}>
              {uploading ? <><Loader2 className="animate-spin" size={14} /> Uploading...</> : success ? <><Check size={14} /> Updated!</> : <><Upload size={14} /> {currentUrl ? 'Replace' : 'Upload'}</>}
            </span>
          </label>
          {currentUrl && (
            <a href={currentUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors" title="View full size">
              <Eye size={14} />
            </a>
          )}
          {currentUrl && isEditable && (
            <button
              onClick={() => onDelete(slot.id)}
              className="w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
              title="Remove image"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    team: true,
    community: true,
    heroes: false,
    programs: false,
  });
  const [sections, setSections] = useState<PhotoSection[]>(INITIAL_SECTIONS);
  const [editingSlot, setEditingSlot] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [persistError, setPersistError] = useState('');

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'siteImages'), (snap) => {
      const map: Record<string, string> = {};
      snap.forEach((d) => {
        const data = d.data();
        if (data.url) map[d.id] = data.url;
      });
      setOverrides(map);
    });
    return unsub;
  }, []);

  const refreshLabelsFromFirestore = async () => {
    const { getAllSiteImages } = await import('../lib/siteImages');
    const all = await getAllSiteImages();
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        slots: section.slots.map((slot) => {
          const doc = all[slot.id];
          if (doc && doc.label && doc.label !== slot.id) {
            return { ...slot, label: doc.label, description: doc.description || slot.description };
          }
          return slot;
        }),
      }))
    );
  };

  useEffect(() => {
    refreshLabelsFromFirestore();
  }, []);

  const getImageUrl = (slotId: string): string | null => {
    if (slotId in overrides) return overrides[slotId];
    if (slotId.startsWith('team_')) {
      const idx = parseInt(slotId.split('_')[1], 10);
      if (Array.isArray(IMAGES.team) && IMAGES.team[idx]) return IMAGES.team[idx];
    }
    if (slotId in IMAGES && typeof (IMAGES as any)[slotId] === 'string') {
      return (IMAGES as any)[slotId];
    }
    return null;
  };

  const handleSave = async (slotId: string, url: string) => {
    await saveSiteImage(slotId, url, slotId);
  };

  const handleDelete = async (slotId: string) => {
    await removeSiteImage(slotId);
  };

  const handleStartEdit = (slot: PhotoSlot) => {
    setEditingSlot(slot.id);
    setEditLabel(slot.label);
    setEditDesc(slot.description);
    setPersistError('');
  };

  const handleEditConfirm = async () => {
    if (!editingSlot) return;
    try {
      const existingUrl = overrides[editingSlot] || '';
      await saveSiteImage(editingSlot, existingUrl, editLabel);
      setSections((prev) =>
        prev.map((section) => ({
          ...section,
          slots: section.slots.map((slot) =>
            slot.id === editingSlot ? { ...slot, label: editLabel, description: editDesc } : slot
          ),
        }))
      );
      setEditingSlot(null);
      setEditLabel('');
      setEditDesc('');
    } catch (err: any) {
      setPersistError(err.message || 'Failed to update name.');
    }
  };

  const handleEditCancel = () => {
    setEditingSlot(null);
    setEditLabel('');
    setEditDesc('');
    setPersistError('');
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSlots = sections.reduce((sum, s) => sum + s.slots.length, 0);
  const uploadedCount = sections.reduce((sum, s) => {
    return sum + s.slots.filter((slot) => getImageUrl(slot.id) !== null).length;
  }, 0);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-outline-variant/20 p-4">
          <div className="text-2xl font-bold text-primary">{uploadedCount}</div>
          <div className="text-xs text-on-surface-variant font-medium">Photos Uploaded</div>
        </div>
        <div className="bg-white rounded-xl border border-outline-variant/20 p-4">
          <div className="text-2xl font-bold text-primary">{totalSlots - uploadedCount}</div>
          <div className="text-xs text-on-surface-variant font-medium">Missing Photos</div>
        </div>
        <div className="bg-white rounded-xl border border-outline-variant/20 p-4">
          <div className="text-2xl font-bold text-primary">{sections.length}</div>
          <div className="text-xs text-on-surface-variant font-medium">Sections</div>
        </div>
        <div className="bg-white rounded-xl border border-outline-variant/20 p-4">
          <div className="text-2xl font-bold text-secondary-container">{Math.round((uploadedCount / totalSlots) * 100)}%</div>
          <div className="text-xs text-on-surface-variant font-medium">Complete</div>
        </div>
      </div>

      {sections.map((section) => {
        const isExpanded = expandedSections[section.key];
        const sectionUploaded = section.slots.filter((s) => getImageUrl(s.id) !== null).length;

        return (
          <div key={section.key} className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden mt-6">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-secondary-container">{section.icon}</div>
                <div className="text-left">
                  <div className="font-display text-lg font-bold text-primary">{section.label}</div>
                  <div className="text-xs text-on-surface-variant">
                    {sectionUploaded}/{section.slots.length} photos uploaded
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex gap-1">
                  {section.slots.map((slot) => (
                    <div
                      key={slot.id}
                      className={cn('w-2 h-2 rounded-full', getImageUrl(slot.id) ? 'bg-green-400' : 'bg-outline-variant/30')}
                    />
                  ))}
                </div>
                {isExpanded ? <ChevronDown size={20} className="text-on-surface-variant" /> : <ChevronRight size={20} className="text-on-surface-variant" />}
              </div>
            </button>

            {isExpanded && (
              <div className="px-6 pb-6 border-t border-outline-variant/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4">
                  {section.slots.map((slot) => {
                    const isThisEditing = editingSlot === slot.id;
                    return (
                      <PhotoSlotCard
                        key={slot.id}
                        slot={slot}
                        currentUrl={getImageUrl(slot.id)}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        isEditing={isThisEditing}
                        editLabel={editLabel}
                        editDesc={editDesc}
                        onLabelChange={setEditLabel}
                        onDescChange={setEditDesc}
                        onEditStart={() => handleStartEdit(slot)}
                        onEditConfirm={handleEditConfirm}
                        onEditCancel={handleEditCancel}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
      {persistError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 font-medium">
          {persistError}
        </div>
      )}
    </>
  );
}
