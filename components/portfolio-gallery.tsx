"use client";

import Image from "next/image";
import { PORTFOLIO_IMAGES } from "@/data/portfolioImages";
import { useEffect, useState } from "react";

export default function PortfolioGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keep this in sync with the .glitch-transition animation-duration below.
  const TRANSITION_MS = 800;
  const IMAGE_SWAP_MS = 320;

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const interval = setInterval(() => {
      setIsTransitioning(true);

      const swapTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % PORTFOLIO_IMAGES.length);
      }, IMAGE_SWAP_MS);

      const endTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_MS);

      timeouts.push(swapTimeout, endTimeout);
    }, 3400);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const getItemAtPosition = (position: number) => {
    return PORTFOLIO_IMAGES[(currentIndex + position) % PORTFOLIO_IMAGES.length];
  };

  const isGif = (src: string) => {
    return src.toLowerCase().endsWith(".gif");
  };

  return (
    <>
      <style>{`
        @keyframes glitchImage {
          0% {
            clip-path: inset(0 0 0 0);
            filter: contrast(1) saturate(1);
            transform: translate3d(0, 0, 0) scale(1);
          }
          9% {
            clip-path: inset(13% 0 63% 0);
            filter: contrast(1.4) saturate(1.8) hue-rotate(14deg);
            transform: translate3d(-8px, 2px, 0) scale(1.025) skewX(-2deg);
          }
          17% {
            clip-path: inset(54% 0 17% 0);
            transform: translate3d(7px, -2px, 0) scale(1.025) skewX(2deg);
          }
          26% {
            clip-path: inset(25% 0 47% 0);
            filter: contrast(1.7) saturate(2.1) hue-rotate(-18deg);
            transform: translate3d(-4px, 3px, 0) scale(1.035);
          }
          34% {
            clip-path: inset(0 0 0 0);
            transform: translate3d(0, 0, 0) scale(1.02);
          }
          46% {
            clip-path: inset(68% 0 8% 0);
            filter: contrast(1.5) saturate(1.9) hue-rotate(28deg);
            transform: translate3d(9px, -1px, 0) scale(1.03);
          }
          58% {
            clip-path: inset(11% 0 70% 0);
            transform: translate3d(-9px, 1px, 0) scale(1.025);
          }
          70% {
            clip-path: inset(39% 0 35% 0);
            filter: contrast(1.25) saturate(1.45);
            transform: translate3d(5px, 0, 0) scale(1.015);
          }
          100% {
            clip-path: inset(0 0 0 0);
            filter: contrast(1) saturate(1);
            transform: scale(1);
          }
        }

        @keyframes glitchOverlay {
          0%, 100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
          12% {
            opacity: 0.75;
            transform: translate3d(8px, -1px, 0);
          }
          24% {
            opacity: 0.35;
            transform: translate3d(-7px, 2px, 0);
          }
          43% {
            opacity: 0.65;
            transform: translate3d(10px, 0, 0);
          }
          60% {
            opacity: 0.3;
            transform: translate3d(-6px, 1px, 0);
          }
          72% {
            opacity: 0.5;
            transform: translate3d(4px, -2px, 0);
          }
        }

        @keyframes scanLines {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          20%, 72% {
            opacity: 0.26;
          }
          100% {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        .glitch-transition .gallery-media {
          animation: glitchImage 650ms steps(1, end);
        }

        .gallery-tile {
          position: relative;
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, filter, opacity;
        }

        .gallery-tile::before,
        .gallery-tile::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0;
        }

        .gallery-tile::before {
          background:
            linear-gradient(90deg, rgb(255 0 80 / 0.55), transparent 34%, rgb(0 240 255 / 0.5)),
            repeating-linear-gradient(0deg, transparent 0 7px, rgb(255 255 255 / 0.2) 8px 9px);
          mix-blend-mode: screen;
        }

        .gallery-tile::after {
          background: linear-gradient(180deg, transparent, rgb(255 255 255 / 0.42), transparent);
          height: 42%;
          mix-blend-mode: overlay;
        }

        .glitch-transition::before {
          animation: glitchOverlay 650ms steps(1, end);
        }

        .glitch-transition::after {
          animation: scanLines 650ms linear;
        }

        .gallery-tile:hover {
          transform: translateY(-2px);
        }

        .gallery-media {
          transition: filter 500ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gallery-tile:hover .gallery-media {
          filter: grayscale(0);
          transform: scale(1.03);
        }

        .gallery-tile[data-position="0"].glitch-transition .gallery-media,
        .gallery-tile[data-position="0"].glitch-transition::before,
        .gallery-tile[data-position="0"].glitch-transition::after {
          animation-delay: 0ms;
        }

        .gallery-tile[data-position="1"].glitch-transition .gallery-media,
        .gallery-tile[data-position="1"].glitch-transition::before,
        .gallery-tile[data-position="1"].glitch-transition::after {
          animation-delay: 55ms;
        }

        .gallery-tile[data-position="2"].glitch-transition .gallery-media,
        .gallery-tile[data-position="2"].glitch-transition::before,
        .gallery-tile[data-position="2"].glitch-transition::after {
          animation-delay: 110ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .glitch-transition .gallery-media,
          .glitch-transition::before,
          .glitch-transition::after {
            animation: none;
          }
          .gallery-tile,
          .gallery-media {
            transition: none;
          }
          .gallery-tile:hover {
            transform: none;
          }
          .gallery-tile:hover .gallery-media {
            transform: none;
          }
        }
      `}</style>

      {/* Mobile - Single item */}
      <div className="mt-6 md:hidden">
        <div
          className={`gallery-tile rounded-lg overflow-hidden h-[200px] ${
            isTransitioning ? "glitch-transition" : ""
          }`}
        >
          {(() => {
            const item = getItemAtPosition(0);
            const gifFile = isGif(item.src);

            return item.type === "image" || gifFile ? (
              <Image
                src={item.src}
                alt={item.alt}
                title={item.title}
                width={1200}
                height={800}
                unoptimized={gifFile}
                className="gallery-media h-full grayscale w-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                title={item.title}
                autoPlay
                muted={true}
                loop
                className="gallery-media h-full grayscale w-full object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
            );
          })()}
        </div>
      </div>

      {/* Desktop - Three items */}
      <div className="mt-6 hidden md:grid grid-cols-3 gap-4">
        {[0, 1, 2].map((position) => {
          const item = getItemAtPosition(position);
          const gifFile = isGif(item.src);

          return (
            <div
              key={position}
              data-position={position}
              className={`gallery-tile rounded-lg overflow-hidden h-[200px] ${
                isTransitioning ? "glitch-transition" : ""
              }`}
            >
              {item.type === "image" || gifFile ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  width={1200}
                  height={800}
                  unoptimized={gifFile}
                  className="gallery-media grayscale h-full w-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  title={item.title}
                  autoPlay
                  muted={true}
                  loop
                  className="gallery-media grayscale h-full w-full object-cover bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
