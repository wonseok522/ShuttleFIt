import { Link } from "react-router";
import { ArrowRight, Database, Users, Car, MapPin, Bell, BarChart3, Home } from "lucide-react";

export default function SystemArchitecture() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#2ECC71] hover:text-[#27AE60] mb-4">
            <Home className="w-5 h-5" />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Back to Home</span>
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
            System Architecture
          </h1>
          <p style={{ fontSize: '16px', color: '#666666' }}>
            Technical overview of the shuttle management system
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] mb-8">
          <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#111111', marginBottom: '24px' }}>
            Data Flow
          </h2>

          {/* Visual Flow */}
          <div className="space-y-6">
            {/* Student */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-[#2ECC71]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Student</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Submits pickup request</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* PickupRequest */}
            <div className="flex items-center gap-4 ml-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#F39C12]/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#F39C12]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>PickupRequest</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Creates request with location & time</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* Auto Assignment */}
            <div className="flex items-center gap-4 ml-16">
              <div className="flex-shrink-0 w-16 h-16 bg-[#9CA3AF]/10 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[#9CA3AF]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Auto Assignment</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Checks region & assigns to bus</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* RoutePlan */}
            <div className="flex items-center gap-4 ml-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#2ECC71]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>RoutePlan</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Optimizes stop order (nearest-neighbor)</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* Driver */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center">
                <Car className="w-8 h-8 text-[#2ECC71]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Driver</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Receives route & executes pickups</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* Real-Time Updates */}
            <div className="flex items-center gap-4 ml-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center">
                <Bell className="w-8 h-8 text-[#2ECC71]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Real-Time Updates</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Location & status broadcast</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#2ECC71]" />
            </div>

            {/* Student Dashboard */}
            <div className="flex items-center gap-4 ml-16">
              <div className="flex-shrink-0 w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-[#2ECC71]" />
              </div>
              <div className="flex-1">
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>Student Dashboard</h3>
                <p style={{ fontSize: '14px', color: '#666666' }}>Sees live ETA & bus location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collections */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] mb-8">
          <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#111111', marginBottom: '24px' }}>
            Database Collections
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>Users</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Base user authentication and role management (Student, Driver, Admin)
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>StudentProfile</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Student details: name, phone, academy branch, frequent locations
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>DriverProfile</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Driver details: name, license, assigned bus, availability status
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>Bus</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Bus information: number, capacity, region, real-time location
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>PickupRequest</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Student requests: location, time window, status, assigned bus
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-[#2ECC71]" />
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>RoutePlan</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Optimized routes: stop order, ETAs, driver assignment, completion status
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
          <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#111111', marginBottom: '24px' }}>
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                Auto Assignment
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Requests are automatically assigned to buses based on region and capacity
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                Route Optimization
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Nearest-neighbor algorithm sorts stops for efficient pickup routes
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-xl flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                Real-Time Tracking
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                Live location updates and ETA calculations for students and admins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
