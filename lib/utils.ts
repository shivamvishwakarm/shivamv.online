import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getUrlHint(url: string): string {
  if (url.startsWith("mailto:")) return url.replace("mailto:", "");
  if (url.startsWith("tel:")) return url.replace("tel:", "");
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
