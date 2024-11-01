"use client";

import { useEffect, useState } from "react";

export default function BrochurePage() {
  const [viewHeight, setViewHeight] = useState("100vh");
  const HEADER_HEIGHT = 96; // Matches the h-20 from your navbar
  const BOTTOM_PADDING = 32; // Adds 2rem padding to bottom

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      const availableHeight = windowHeight - HEADER_HEIGHT - BOTTOM_PADDING;
      setViewHeight(`${availableHeight}px`);
    };

    // Set initial height
    updateHeight();

    // Handle resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full pb-8 relative"
      style={{
        marginTop: `${HEADER_HEIGHT}px`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url(/residences.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px) brightness(0.7)",
          transform: "scale(1.1)", // Prevents blur edges
        }}
      />

      <div
        className="w-full max-w-7xl mx-auto p-4 relative"
        style={{ height: viewHeight }}
      >
        {/* Glass effect container */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {/* Blur border effect */}
          <div
            className="absolute inset-0 backdrop-blur-xl bg-white/10"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
            }}
          />

          {/* Main content */}
          <iframe
            src="/lumina_brochure.pdf#navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH&zoom=125"
            className="relative w-full h-full bg-white/95"
            style={{
              boxShadow: `
                0 0 50px rgba(0, 0, 0, 0.3),
                0 4px 20px rgba(0, 0, 0, 0.2),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1)
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}
