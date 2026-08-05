"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeWrapperProps {
  value: string;
  size?: number;
  className?: string;
}

export function QRCodeWrapper({ value, size = 200, className }: QRCodeWrapperProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const fgColor = theme === "dark" ? "#ffffff" : "#171717";

  return (
    <div className={className}>
      <QRCodeSVG value={value} size={size} fgColor={fgColor} bgColor="transparent" level="M" />
    </div>
  );
}
