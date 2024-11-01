"use client";

import { useEffect, useState } from "react";
import { Loader2, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrochurePage() {
  const [viewHeight, setViewHeight] = useState("100vh");
  const [isMobile, setIsMobile] = useState(null);
  const HEADER_HEIGHT = 96;
  const BOTTOM_PADDING = 32;

  // Check for mobile device immediately
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  // Handle viewport height updates
  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.visualViewport?.height || window.innerHeight;
      const availableHeight = windowHeight - HEADER_HEIGHT - BOTTOM_PADDING;
      setViewHeight(`${availableHeight}px`);
    };

    updateHeight();

    const handleResize = () => {
      setTimeout(updateHeight, 100);
    };

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(updateHeight, 200);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Don't render anything until we know if it's mobile or not
  if (isMobile === null) {
    return null;
  }

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
          transform: "scale(1.1)",
        }}
      />

      <div
        className="w-full max-w-7xl mx-auto p-4 relative"
        style={{ height: viewHeight }}
      >
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          {/* Glass effect container */}
          <div className="absolute inset-0 backdrop-blur-xl bg-white/10">
            <div
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
              }}
            />
          </div>

          {isMobile ? (
            // Mobile View
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-8 p-8 text-center max-w-md mx-4">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Lumina Sanctuary Brochure
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed">
                    View our brochure to explore our exclusive residences and
                    amenities.
                  </p>
                </div>
                <div className="flex flex-col w-full space-y-4">
                  <Button
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 h-12 shadow-lg"
                    onClick={() =>
                      window.open("/lumina_brochure.pdf", "_blank")
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Brochure
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 h-12 shadow-lg"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/lumina_brochure.pdf";
                      link.download = "Lumina_Sanctuary_Brochure.pdf";
                      link.click();
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download to Device
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Desktop View
            <>
              {/* Desktop loading state */}
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4 p-6">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                  <p className="text-white text-sm font-medium">
                    Loading brochure...
                  </p>
                </div>
              </div>

              {/* Desktop PDF viewer */}
              <iframe
                src="/lumina_brochure.pdf#navpanes=0&scrollbar=0&statusbar=0&messages=0&zoom=125"
                className="relative w-full h-full bg-white"
                style={{
                  boxShadow: `
                    0 0 50px rgba(0, 0, 0, 0.3),
                    0 4px 20px rgba(0, 0, 0, 0.2),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                  `,
                  zIndex: 10,
                }}
                onLoad={(e) => {
                  const loader = e.target.parentElement?.querySelector(".z-20");
                  if (loader) loader.style.display = "none";
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
