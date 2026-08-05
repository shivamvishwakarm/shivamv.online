"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, QrCode } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QRCodeWrapper } from "@/components/qr-code";
import { Dialog } from "@/components/ui/dialog";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [origin, setOrigin] = useState("https://shivamv.online");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setOrigin(window.location.origin);
  }, []);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3  backdrop-blur-sm ">
      <div className="max-w-3xl w-full mx-auto flex items-center justify-between ">
        {/* Nav links */}
        <div className="flex items-center gap-5">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors duration-150 ${isActive
                  ? "text-neutral-900 dark:text-white font-medium"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right side controls */}
        {mounted && (
          <div className="flex items-center gap-3">
            {/* QR code button */}
            <button
              onClick={() => setQrOpen(true)}
              aria-label="Open QR code"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
            >
              <QrCode className="w-4 h-4" />
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-150"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </nav>

    <Dialog isOpen={qrOpen} onClose={() => setQrOpen(false)}>
      <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center">
        <QRCodeWrapper value={`${origin}/connect`} size={200} />
        <p className="font-[family-name:var(--font-caveat)] text-2xl mt-4">Scan to connect</p>
        <p className="text-xs text-neutral-500 mt-1">{origin.replace(/https?:\/\//, "")}/connect</p>
      </div>
    </Dialog>
  </>
  );
};

export default Navbar;
