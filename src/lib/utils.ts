// import { type ClassValue, clsx } from "clsx"
import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

const cloudName = import.meta.env.VITE_CLOUDINARY_NAME as string;
const cloudApi = import.meta.env.VITE_CLOUDINARY_API as string;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  format: string | undefined
): string {
  return dayjs(date).format(format);
}

export async function mediaUploader(files: File[]) {
  const media = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'iablofcf');
    formData.append('cloud_name', cloudName);

    try {
      const res = await fetch(`${cloudApi}/${cloudName}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      media.push(data.secure_url);
    } catch (err) {
      console.log('Error while uploading:', err);
    }
  }
}
