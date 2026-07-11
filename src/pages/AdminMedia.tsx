import React, { useState, useEffect } from 'react';
import { Trash2, Copy, ExternalLink, ImagePlus, Check } from 'lucide-react';
import CloudinaryUpload from '../components/CloudinaryUpload';
import type { CloudinaryUploadResult } from '../lib/cloudinary';
import {
  saveSiteImage,
  removeSiteImage,
  onSnapshot,
  collection,
  db,
  type SiteImage,
} from '../lib/siteImages';
import { IMAGES } from '../lib/images';

const SLOT_OPTIONS = Object.keys(IMAGES)
  .filter((k) => typeof IMAGES[k as keyof typeof IMAGES] === 'string')
  .map((k) => ({ key: k, label: k.replace(/([A-Z])/g, ' $1').trim() }));

export default function AdminMedia() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [slotAssignments, setSlotAssignments] = useState<Record<string, string>>({});

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'siteImages'), (snap) => {
      const items: SiteImage[] = [];
      const assignments: Record<string, string> = {};
      snap.forEach((d) => {
        const data = d.data() as SiteImage;
        items.push(data);
        if (data.slot) assignments[data.slot] = d.id;
      });
      setImages(items);
      setSlotAssignments(assignments);
    });
    return unsub;
  }, []);

  const handleUpload = async (result: CloudinaryUploadResult) => {
    const newImage: SiteImage = {
      slot: '',
      url: result.secure_url,
      label: '',
      updatedAt: null,
    };
    await saveSiteImage(`upload_${Date.now()}`, newImage.url, newImage.label);
  };

  const handleDelete = async (img: SiteImage) => {
    const docId = img.slot || `upload_${img.url.split('/').pop()?.split('.')[0] || Date.now()}`;
    await removeSiteImage(docId);
  };

  const handleAssignSlot = async (img: SiteImage, slot: string) => {
    // Remove previous assignment for this slot if any
    const existingId = slotAssignments[slot];
    if (existingId) {
      await removeSiteImage(existingId);
    }
    await saveSiteImage(slot, img.url, img.label);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary-container">Media Library</h2>
          <p className="text-on-surface-variant mt-1">Upload and assign images for the website.</p>
        </div>
        <div className="text-sm text-on-surface-variant">
          {images.length} image{images.length !== 1 ? 's' : ''} in Firestore
        </div>
      </div>

      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-display text-lg font-bold text-primary-container mb-4 flex items-center gap-2">
          <ImagePlus size={20} /> Upload New Image
        </h3>
        <CloudinaryUpload
          folder="obomocare"
          onUpload={handleUpload}
        />
        <p className="text-xs text-on-surface-variant mt-3 opacity-60">
          Images upload to Cloudinary and are saved to Firestore. Assign a slot to make it appear on the site.
        </p>
      </div>

      <div className="glass-card rounded-xl p-6 mb-8">
        <h3 className="font-display text-lg font-bold text-primary-container mb-4">Active Slot Assignments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SLOT_OPTIONS.map(({ key, label }) => {
            const assignedUrl = (IMAGES as any)[key];
            const hasOverride = key in slotAssignments;
            return (
              <div key={key} className={`flex items-center gap-3 p-3 rounded-lg ${hasOverride ? 'bg-secondary-container/20 ring-1 ring-secondary-container/40' : 'bg-surface-container-low'}`}>
                {typeof assignedUrl === 'string' && (
                  <img src={assignedUrl} alt="" className="w-10 h-10 rounded object-cover" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-on-surface truncate">{label}</div>
                  <div className="text-[10px] text-on-surface-variant opacity-60 truncate">{key}</div>
                </div>
                {hasOverride && <Check size={14} className="text-secondary-container shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>

      {images.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <ImagePlus size={48} className="mx-auto text-outline-variant mb-4" />
          <p className="text-on-surface-variant text-lg">No images in Firestore yet.</p>
          <p className="text-on-surface-variant text-sm opacity-60 mt-1">Upload your first image above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.url} className="glass-card rounded-xl overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-surface-container-low">
                <img
                  src={img.url}
                  alt={img.label || 'Uploaded image'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => copyUrl(img.url)}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === img.url ? (
                      <span className="text-xs font-bold text-green-600">Copied</span>
                    ) : (
                      <Copy size={16} className="text-primary-container" />
                    )}
                  </button>
                  <a
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={16} className="text-primary-container" />
                  </a>
                  <button
                    onClick={() => handleDelete(img)}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} className="text-error" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-on-surface mb-2">
                  {img.label || 'Unlabeled'}
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={img.slot || ''}
                    onChange={(e) => {
                      if (e.target.value) handleAssignSlot(img, e.target.value);
                    }}
                    className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-lg text-xs py-1.5 px-2 text-on-surface outline-none focus:border-secondary-container"
                  >
                    <option value="">Assign to slot...</option>
                    {SLOT_OPTIONS.map(({ key, label }) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-on-surface-variant opacity-60">
                    {img.slot ? `Active: ${img.slot}` : 'No slot'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
