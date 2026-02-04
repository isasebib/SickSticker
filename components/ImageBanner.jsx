"use client";

import { useState } from "react";

export default function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="banner-images">
      <img
        className="low-res-img"
        src="/low-res/banner.jpeg"
        alt="banner-low-res"
      />

      <img
        className="high-res-img"
        src="/med-res/banner.jpeg"
        alt="banner-high-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
      />

      <div className="cta-btns-container">
        <div>
          <div>
            <h3>Welcome to</h3>
            <h1>SickSticker Store!</h1>
          </div>
          <div>
            <button>Shop stickers</button>
            <button>Shop planner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
