"use client";

import React, { useState } from "react";
import { BookOpen, FileText } from "lucide-react";
import Bookshelf from "@/components/bookshelf";

type TabId = "bookshelf" | "blog";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("bookshelf");

  const tabs: Tab[] = [
    {
      id: "bookshelf",
      label: "Bookshelf",
      icon: <BookOpen className="w-4 h-4" />,
      content: <Bookshelf />,
    },
    {
      id: "blog",
      label: "Blog",
      icon: <FileText className="w-4 h-4" />,
      content: (
        <div className="text-center py-12">
          <p className="text-neutral-500 dark:text-neutral-400">
            Coming soon...
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8">
      {/* Tab Navigation */}
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <nav className="flex gap-1" aria-label="Content sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 text-sm font-medium
                transition-all duration-200 rounded-t-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500
                ${
                  activeTab === tab.id
                    ? "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800/50 border-b-2 border-neutral-900 dark:border-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                }
              `}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default ContentTabs;
