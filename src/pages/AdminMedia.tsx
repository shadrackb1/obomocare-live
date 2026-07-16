import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Copy, ExternalLink, ImagePlus, Check, Loader2, Search } from 'lucide-react';
import { uploadToCloudinary, type CloudinaryUploadResult } from '../lib/cloudinary';
import {
  saveSiteImage,
  removeSiteImage,
  onSnapshot,
  collection,
  db,
  type SiteImage,
} from '../lib/siteImages';
import { IMAGES } from '../lib/images';

export default function AdminMedia() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [filter, setFilter] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'siteImages'), (snap) => {
      const items: SiteImage[] = [];
      snap.forEach((d) => {
        items.push(d.data() as SiteImage);
      });
      setImages(items);
    });
    return unsub;
  }, []);

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setUploading(true);
    setUploadError('');
    try {
      const result = await uploadToCloudinary(file, 'obomocare');
      const id = `upload_${Date.now()}`;
      await saveSiteImage(id, result.secure_url, file.name.replace(/\.[^.]+$/, ''));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setUploadError(message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const handleDelete = async (img: SiteImage) => {
    const docId = img.slot || `upload_${img.url.split('/').pop()?.split('.')[0] || Date.now()}`;
    await removeSiteImage(docId);
    setConfirmDelete(null);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const filtered = images.filter((img) =>
    !filter || (img.label && img.label.toLowerCase().includes(filter.toLowerCase())) ||
    (img.slot && img.slot.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Media Library</h2>
          <p className="text-on-surface-variant mt-1 text-sm">All uploaded images. Upload new ones or manage existing.</p>
        </div>
        <div className="text-sm text-on-surface-variant">
          {images.length} image{images.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl border border-outline-variant/20 p-6">
        <h3 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <ImagePlus size={20} className="text-secondary-container" /> Upload Image
        </h3>
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-outline-variant/40 rounded-xl cursor-pointer hover:border-secondary-container hover:bg-surface-container-low transition-colors">
          <div className="flex flex-col items-center gap-2 text-on-surface-variant">
            {uploading ? (
              <Loader2 className="animate-spin" size={32} />
            ) : (
              <>
                <ImagePlus size={32} className="text-secondary-container" />
                <span className="font-medium text-sm">Click to upload an image</span>
                <span className="text-xs opacity-60">JPG, PNG, WEBP</span>
              </>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
            }}
            className="hidden"
          />
        </label>
        {uploadError && <p className="text-sm text-red-500 font-medium mt-2">{uploadError}</p>}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
        <input
          type="text"
          placeholder="Search images..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-outline-variant/30 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-container"
        />
      </div>

      {/* Image Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-outline-variant/20 p-12 text-center">
          <ImagePlus size={48} className="mx-auto text-outline-variant/40 mb-4" />
          <p className="text-on-surface-variant text-lg font-medium">No images yet</p>
          <p className="text-on-surface-variant text-sm opacity-60 mt-1">Upload your first image above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <div key={img.url} className="bg-white rounded-xl border border-outline-variant/20 overflow-hidden group">
              <div className="relative aspect-video bg-surface-container-low overflow-hidden">
                <img
                  src={img.url}
                  alt={img.label || 'Uploaded image'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => copyUrl(img.url)}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === img.url ? (
                      <Check size={14} className="text-green-600" />
                    ) : (
                      <Copy size={14} className="text-primary" />
      )}

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="font-display text-lg font-bold text-primary mb-2">Delete Image?</h3>
            <p className="text-sm text-on-surface-variant mb-4">This action cannot be undone. The image will be permanently removed.</p>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const img = images.find((i) => i.slot === confirmDelete);
                  if (img) handleDelete(img);
                }}
                className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
                  </button>
                  <a
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Open"
                  >
                    <ExternalLink size={14} className="text-primary" />
                  </a>
                  <button
                    onClick={() => setConfirmDelete(img.slot)}
                    className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs font-medium text-on-surface truncate">{img.label || 'Unlabeled'}</div>
                <div className="text-[10px] text-on-surface-variant opacity-50 truncate">{img.slot || 'No slot'}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
