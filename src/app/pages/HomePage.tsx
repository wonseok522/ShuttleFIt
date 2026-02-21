import { Link } from "react-router";
import { Users, Car, UserCog, Network, Workflow } from "lucide-react";
import { ViewportIndicator } from "../components/ViewportIndicator";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-6">
      <ViewportIndicator />
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
            Shuttle Management System
          </h1>
          <p style={{ fontSize: '16px', color: '#666666', marginTop: '8px' }}>
            Select a role to view the interface
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Portal */}
          <Link to="/onboarding">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                Student Portal
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Onboarding, home dashboard, and pickup requests
              </p>
            </div>
          </Link>

          {/* Driver Portal */}
          <Link to="/driver">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                Driver Dashboard
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Route management and pickup tracking
              </p>
            </div>
          </Link>

          {/* Admin Portal */}
          <Link to="/admin">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mb-4">
                <UserCog className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                Admin Dashboard
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Fleet management and route optimization
              </p>
            </div>
          </Link>

          {/* System Architecture */}
          <Link to="/architecture">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E5E7EB]">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                System Architecture
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', marginTop: '8px' }}>
                Technical overview and data flow
              </p>
            </div>
          </Link>
        </div>

        {/* Automation Logic */}
        <Link to="/automation">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E5E7EB] mt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-full flex items-center justify-center">
                <Workflow className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                  MVP Automation Logic
                </h3>
                <p style={{ fontSize: '14px', color: '#666666', marginTop: '4px' }}>
                  Visual flowchart of route assignment process
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Design System Info */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-sm border-2 border-[#2ECC71]/20 mt-6">
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '16px' }}>
            🎨 Design System
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p style={{ fontSize: '12px', color: '#666666', marginBottom: '4px' }}>Platform</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>Mobile-first</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#666666', marginBottom: '4px' }}>Primary Color</p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-[#2ECC71]" />
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>#2ECC71</p>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#666666', marginBottom: '4px' }}>Spacing</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>8pt system</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#666666', marginBottom: '4px' }}>Border Radius</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>16px</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}