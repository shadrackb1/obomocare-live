import React, { useState } from 'react';
import { Trash2, Copy, ExternalLink, ImagePlus } from 'lucide-react';
import CloudinaryUpload from '../components/CloudinaryUpload';
import type { CloudinaryUploadResult } from '../lib/cloudinary';

interface UploadedImage {
  url: string;
  publicId: string;
  width: number;
  height: number;
  uploadedAt: Date;
  label: string;
}

const STORAGE_KEY = 'obomocare_media';

function loadImages(): UploadedImage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw).map((img: any) => ({
      ...img,
      uploadedAt: new Date(img.uploadedAt),
    }));
  } catch {
    return [];
  }
}

function saveImages(images: UploadedImage[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

export default function AdminMedia() {
  const [images, setImages] = useState<UploadedImage[]>(loadImages);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleUpload = (result: CloudinaryUploadResult) => {
    const newImage: UploadedImage = {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      uploadedAt: new Date(),
      label: '',
    };
    const updated = [newImage, ...images];
    setImages(updated);
    saveImages(updated);
  };

  const handleDelete = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    saveImages(updated);
  };

  const handleLabelChange = (index: number, label: string) => {
    const updated = [...images];
    updated[index] = { ...updated[index], label };
    setImages(updated);
    saveImages(updated);
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
          <p className="text-on-surface-variant mt-1">Upload and manage images for the website.</p>
        </div>
        <div className="text-sm text-on-surface-variant">
          {images.length} image{images.length !== 1 ? 's' : ''}
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
          Images upload directly to Cloudinary. URL is copied to clipboard on click.
        </p>
      </div>

      {images.length === 0 ? (
        <div className="glass-card rounded-xl p-12 text-center">
          <ImagePlus size={48} className="mx-auto text-outline-variant mb-4" />
          <p className="text-on-surface-variant text-lg">No images uploaded yet.</p>
          <p className="text-on-surface-variant text-sm opacity-60 mt-1">Upload your first image above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={img.publicId} className="glass-card rounded-xl overflow-hidden group">
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
                    onClick={() => handleDelete(index)}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} className="text-error" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <input
                  type="text"
                  value={img.label}
                  onChange={(e) => handleLabelChange(index, e.target.value)}
                  placeholder="Add a label..."
                  className="w-full bg-transparent border-b border-outline-variant/30 focus:border-secondary-container outline-none text-sm py-1 text-on-surface placeholder-outline-variant/50"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-on-surface-variant opacity-60">
                    {img.width}x{img.height}
                  </span>
                  <span className="text-xs text-on-surface-variant opacity-60">
                    {img.uploadedAt.toLocaleDateString()}
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
