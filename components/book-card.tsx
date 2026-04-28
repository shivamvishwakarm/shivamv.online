import React from "react";
import { ExternalLink, FileText } from "lucide-react";
import { BookItem, ReadingStatus } from "@/data/bookshelf";

const statusBadge: Record<ReadingStatus, { label: string; className: string }> = {
  reading: {
    label: "Reading",
    className:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  completed: {
    label: "Completed",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  "to-read": {
    label: "To Read",
    className:
      "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
  },
};

const BookCard = ({ title, author, status, link, pdf }: BookItem) => {
  const badge = statusBadge[status];

  return (
    <div className="bg-white dark:bg-[#18181b] rounded-xl p-5 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
            {title}
          </h3>
          {author && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {author}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      {(link || pdf) && (
        <div className="flex items-center gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open link for ${title}`}
              className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 rounded"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Link</span>
            </a>
          )}
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open PDF for ${title}`}
              className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 rounded"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default BookCard;
