import { useState, useEffect } from "react";
import { Smartphone, Tablet, Monitor } from "lucide-react";

export function ViewportIndicator() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDeviceType = () => {
    if (width <= 390) return { icon: Smartphone, label: "Mobile (390px)", color: "#2ECC71" };
    if (width <= 768) return { icon: Tablet, label: "Tablet", color: "#F39C12" };
    return { icon: Monitor, label: "Desktop", color: "#9CA3AF" };
  };

  const device = getDeviceType();
  const Icon = device.icon;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-xl shadow-lg border border-[#E5E7EB] px-4 py-2 flex items-center gap-2">
      <Icon className="w-4 h-4" style={{ color: device.color }} />
      <div>
        <p style={{ fontSize: '10px', color: '#666666' }}>Viewport</p>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#111111' }}>
          {width}px
        </p>
      </div>
    </div>
  );
}
