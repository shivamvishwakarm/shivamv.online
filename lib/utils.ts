import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getUrlHint(url: string): string {
  if (url.startsWith("mailto:")) return url.replace("mailto:", "");
  if (url.startsWith("tel:")) return url.replace("tel:", "");
  if (url.startsWith("data:")) return "tap to save";
  if (url === "/api/contact") return "saves to your contacts";
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
