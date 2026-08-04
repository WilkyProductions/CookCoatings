"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectSlideshow({ photos }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = photos.length > 1;

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="project-slideshow">
      <div className="slideshow-frame">
        <Image
          key={photos[index].src}
          src={photos[index].src}
          alt={photos[index].alt}
          fill
          sizes="(min-width: 900px) 700px, 100vw"
          className="slideshow-img"
        />
        {hasMultiple && (
          <>
            <button className="slide-nav prev" onClick={prev} aria-label="Previous photo" type="button">
              &#8249;
            </button>
            <button className="slide-nav next" onClick={next} aria-label="Next photo" type="button">
              &#8250;
            </button>
          </>
        )}
      </div>
      {hasMultiple && (
        <div className="slideshow-dots">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              className={`dot${i === index ? " active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
