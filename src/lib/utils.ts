// import { type ClassValue, clsx } from "clsx"
import { type ClassValue, clsx } from 'clsx';
import dayjs from "dayjs"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | number | Date | dayjs.Dayjs | null | undefined, format: string | undefined): string {
  return dayjs(date).format(format);
}