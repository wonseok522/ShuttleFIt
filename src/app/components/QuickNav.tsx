import { Link, useLocation } from "react-router";
import { Home } from "lucide-react";

export function QuickNav() {
  const location = useLocation();
  
  // Don't show on home page
  if (location.pathname === "/") return null;

  return (
    <Link to="/">
      <button className="fixed top-4 right-4 z-40 bg-white rounded-full shadow-lg border border-[#E5E7EB] w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <Home className="w-5 h-5 text-[#2ECC71]" />
      </button>
    </Link>
  );
}
