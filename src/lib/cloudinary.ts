const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export async function uploadToCloudinary(
  file: File,
  folder?: string
): Promise<CloudinaryUploadResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  if (folder) {
    formData.append('folder', folder);
  }

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || 'Upload failed');
  }

  const data = await res.json();
  return data;
}

export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; height?: number; crop?: string }
): string {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const transformations: string[] = [];

  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.crop) transformations.push(`c_${options.crop}`);

  if (transformations.length > 0) {
    return `${base}/${transformations.join(',')}/${publicId}`;
  }
  return `${base}/${publicId}`;
}

export function optimizeCloudinaryUrl(
  url: string,
  width?: number,
  quality?: 'hero' | 'card' | 'thumb'
): string {
  if (!url || !url.includes('cloudinary.com')) return url;
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;
  const base = parts[0] + '/upload/';
  const rest = parts[1];
  const q = quality === 'hero' ? 'q_85' : quality === 'card' ? 'q_75' : quality === 'thumb' ? 'q_70' : 'q_auto';
  const transforms = ['f_auto', 'dpr_auto', q];
  if (width) transforms.push(`w_${width}`);
  return `${base}${transforms.join(',')}/${rest}`;
}
