"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
export function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const move = (step: number) =>
    setActive((i) =>
      i === null ? 0 : (i + step + images.length) % images.length,
    );
  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);
  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <button
            className="gallery-image"
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Open ${name} image ${i + 1}`}
          >
            <img src={src} alt={`${name} catalogue image ${i + 1}`} />
            <span>
              <ArrowUpRight size={17} />
            </span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} image gallery`}
          onClick={() => setActive(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
          >
            <X />
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <img
            onClick={(e) => e.stopPropagation()}
            src={images[active]}
            alt={`${name}, catalogue image ${active + 1}`}
          />
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
          <span>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
