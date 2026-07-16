import React, { useRef, useState, useEffect } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { uploadToCloudinary, type CloudinaryUploadResult } from '../lib/cloudinary';

interface Props {
  folder?: string;
  onUpload: (result: CloudinaryUploadResult) => void;
  className?: string;
}

export default function CloudinaryUpload({ folder, onUpload, className }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }

    if (preview) URL.revokeObjectURL(preview);
    setError(null);
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const result = await uploadToCloudinary(file, folder);
      onUpload(result);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
      setPreview(null);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearPreview = () => {
    setPreview(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className={className}>
      {preview ? (
        <div className="relative rounded-xl overflow-hidden border border-outline-variant/30">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover" />
          {uploading && (
            <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
              <Loader2 className="animate-spin text-on-primary" size={32} />
            </div>
          )}
          {!uploading && (
            <button
              onClick={clearPreview}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/70 text-on-primary flex items-center justify-center hover:bg-primary transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-outline-variant/50 rounded-xl cursor-pointer hover:border-secondary-container hover:bg-surface-container-low transition-colors">
          <div className="flex flex-col items-center gap-2 text-on-surface-variant">
            {uploading ? (
              <Loader2 className="animate-spin" size={32} />
            ) : (
              <>
                <ImageIcon size={32} className="text-secondary-container" />
                <span className="font-medium text-sm">Click to upload an image</span>
                <span className="text-xs opacity-60">JPG, PNG, WEBP</span>
              </>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      )}
      {error && (
        <p className="text-sm text-error mt-2">{error}</p>
      )}
    </div>
  );
}
