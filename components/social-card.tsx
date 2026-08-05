"use client";

import { motion } from "motion/react";
import { getUrlHint } from "@/lib/utils";

interface SocialCardProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  delay: number;
}

export function SocialCard({ name, url, icon, delay }: SocialCardProps) {
  const isMailto = url.startsWith("mailto:");
  const isTel = url.startsWith("tel:");
  const externalProps = isMailto || isTel
    ? {}
    : { target: "_blank" as const, rel: "noreferrer" };

  return (
    <motion.a
      href={url}
      aria-label={`Visit ${name}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-4 w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors duration-150"
      {...externalProps}
    >
      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
          {name}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
          {getUrlHint(url)}
        </span>
      </div>
    </motion.a>
  );
}
