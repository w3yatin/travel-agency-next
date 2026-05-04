

"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    plexify?: () => { init: () => void };
  }
}

export default function RouteLoader() {

  const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);

      if (typeof window !== "undefined" && window.plexify) {
        window.plexify().init();
      }

      return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

  return (
     <div id="loading-area" className="pxl-loader style-3">
      <div className="loading-dot-spinner">
            <div className="loading-dot"></div>
        </div>
    </div>
  );
}