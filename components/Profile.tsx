"use client";
import React from "react";
import { Dialog } from "./ui/dialog";
import { Eye } from "lucide-react";
import image from "../public/profile0.png"
import Image from "next/image";
const ProfileImage = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer group relative inline-block"
      >
        <Image
          priority
          quality={100}
          className="rounded-full border-gray-500 border p-1 border-dashed relative z-10 group-hover:border-none sepia"
          src={image}
          width={100}
          height={100}
          alt="profile"
        />
        <div className="absolute inset-0 ml-[3px] mt-1  rounded-full bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 w-[94px] h-[94px]">
          <Eye className="text-white w-6 h-6" />
        </div>
      </div>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="relative w-[80vw] max-w-[500px] aspect-square rounded-full overflow-hidden border-4 border-gray-500 border-dashed p-1 bg-background">
          <Image
            src={image}
            alt="profile preview"
            fill
            className="object-cover rounded-full sepia"
            quality={100}
            priority
          />
        </div>
      </Dialog>
    </>
  );
};

export default ProfileImage;
