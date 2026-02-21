import { useState } from "react";
import { Bus, MapPin, Clock, AlertTriangle, CheckCircle2, XCircle, Bell, Filter } from "lucide-react";
import { motion } from "motion/react";

type RequestStatus = "unassigned" | "assigned" | "completed";

interface Request {
  id: string;
  studentName: string;
  location: string;
  timeWindow: string;
  status: RequestStatus;
  busNumber?: string;
}

interface BusLocation {
  id: string;
  busNumber: string;
  lat: number;
  lng: number;
  studentsOnBoard: number;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<Request[]>([
    { id: "1", studentName: "김민준", location: "강남역", timeWindow: "14:30-15:00", status: "unassigned" },
    { id: "2", studentName: "이서윤", location: "역삼역", timeWindow: "15:00-15:30", status: "unassigned" },
    { id: "3", studentName: "박지우", location: "선릉역", timeWindow: "15:15-15:45", status: "assigned", busNumber: "2호차" },
    { id: "4", studentName: "최하은", location: "삼성역", timeWindow: "15:30-16:00", status: "assigned", busNumber: "2호차" },
    { id: "5", studentName: "정예준", location: "강남역", timeWindow: "14:45-15:15", status: "completed", busNumber: "1호차" },
  ]);

  const [buses] = useState<BusLocation[]>([
    { id: "1", busNumber: "1호차", lat: 37.497, lng: 127.027, studentsOnBoard: 3 },
    { id: "2", busNumber: "2호차", lat: 37.501, lng: 127.039, studentsOnBoard: 2 },
    { id: "3", busNumber: "3호차", lat: 37.505, lng: 127.050, studentsOnBoard: 1 },
  ]);

  const totalRequests = requests.length;
  const unassignedRequests = requests.filter(r => r.status === "unassigned").length;
  const activeRoutes = buses.length;
  const delayedPickups = 0; // Mock data

  const assignToBus = (requestId: string, busNumber: string) => {
    setRequests(requests.map(req =>
      req.id === requestId ? { ...req, status: "assigned", busNumber } : req
    ));
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111111' }}>
              Admin Dashboard
            </h1>
            <p style={{ fontSize: '14px', color: '#666666', marginTop: '4px' }}>
              실시간 셔틀 관리 시스템
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 rounded-xl bg-white border border-[#E5E7EB] hover:bg-gray-50">
              <Filter className="w-5 h-5 text-[#666666]" />
            </button>
            <button className="p-3 rounded-xl bg-white border border-[#E5E7EB] hover:bg-gray-50 relative">
              <Bell className="w-5 h-5 text-[#666666]" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#E74C3C] rounded-full flex items-center justify-center">
                <span style={{ fontSize: '10px', color: 'white', fontWeight: 700 }}>3</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="px-8 py-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#2ECC71]" />
                </div>
                <p style={{ fontSize: '14px', color: '#666666' }}>Total Requests</p>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
                {totalRequests}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#F39C12]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#F39C12]" />
                </div>
                <p style={{ fontSize: '14px', color: '#666666' }}>Unassigned</p>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
                {unassignedRequests}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-[#2ECC71]" />
                </div>
                <p style={{ fontSize: '14px', color: '#666666' }}>Active Routes</p>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
                {activeRoutes}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#E74C3C]/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[#E74C3C]" />
                </div>
                <p style={{ fontSize: '14px', color: '#666666' }}>Delayed</p>
              </div>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#111111' }}>
                {delayedPickups}
              </p>
            </div>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Panel: Requests */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E5E7EB]">
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                    Today's Requests
                  </h2>
                </div>
                
                <div className="max-h-[600px] overflow-y-auto">
                  {/* Unassigned Section */}
                  <div className="px-6 py-3 bg-[#F39C12]/5">
                    <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#F39C12' }}>
                      UNASSIGNED ({unassignedRequests})
                    </h3>
                  </div>
                  
                  {requests.filter(r => r.status === "unassigned").map(request => (
                    <div key={request.id} className="px-6 py-4 border-b border-[#E5E7EB] hover:bg-gray-50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                            {request.studentName}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-[#666666]" />
                              <span style={{ fontSize: '12px', color: '#666666' }}>
                                {request.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-[#666666]" />
                              <span style={{ fontSize: '12px', color: '#666666' }}>
                                {request.timeWindow}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => assignToBus(request.id, "1호차")}
                          className="px-3 py-1.5 rounded-lg bg-[#2ECC71] text-white text-xs font-semibold hover:bg-[#27AE60]"
                        >
                          Assign to 1호차
                        </button>
                        <button
                          onClick={() => assignToBus(request.id, "2호차")}
                          className="px-3 py-1.5 rounded-lg bg-[#2ECC71] text-white text-xs font-semibold hover:bg-[#27AE60]"
                        >
                          Assign to 2호차
                        </button>
                        <button
                          onClick={() => assignToBus(request.id, "3호차")}
                          className="px-3 py-1.5 rounded-lg bg-[#2ECC71] text-white text-xs font-semibold hover:bg-[#27AE60]"
                        >
                          Assign to 3호차
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Assigned Section */}
                  <div className="px-6 py-3 bg-[#2ECC71]/5 mt-4">
                    <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71' }}>
                      ASSIGNED
                    </h3>
                  </div>
                  
                  {requests.filter(r => r.status === "assigned").map(request => (
                    <div key={request.id} className="px-6 py-4 border-b border-[#E5E7EB]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                            {request.studentName}
                          </p>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-[#666666]" />
                              <span style={{ fontSize: '12px', color: '#666666' }}>
                                {request.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-[#666666]" />
                              <span style={{ fontSize: '12px', color: '#666666' }}>
                                {request.timeWindow}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#2ECC71]/10">
                          <span style={{ fontSize: '12px', fontWeight: 600, color: '#2ECC71' }}>
                            {request.busNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Map and Active Routes */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E5E7EB]">
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                    Live Fleet Tracking
                  </h2>
                </div>
                
                <div className="h-[400px] bg-gradient-to-br from-green-50 via-blue-50 to-green-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {buses.map((bus, index) => (
                        <motion.div
                          key={bus.id}
                          animate={{
                            x: [0, 20, 0],
                            y: [0, -10, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            delay: index * 0.5,
                          }}
                          className="absolute"
                          style={{
                            left: `${20 + index * 25}%`,
                            top: `${30 + index * 15}%`,
                          }}
                        >
                          <div className="relative">
                            <div className="w-12 h-12 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-lg">
                              <Bus className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm border border-[#E5E7EB]">
                              <span style={{ fontSize: '10px', fontWeight: 600, color: '#111111' }}>
                                {bus.busNumber}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="px-6 py-4 bg-gray-50 border-t border-[#E5E7EB] flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#2ECC71]" />
                    <span style={{ fontSize: '12px', color: '#666666' }}>Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F39C12]" />
                    <span style={{ fontSize: '12px', color: '#666666' }}>Delayed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#9CA3AF]" />
                    <span style={{ fontSize: '12px', color: '#666666' }}>Idle</span>
                  </div>
                </div>
              </div>

              {/* Active Routes */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB]">
                <div className="px-6 py-4 border-b border-[#E5E7EB]">
                  <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
                    Active Routes
                  </h2>
                </div>
                
                <div className="p-6 space-y-3">
                  {buses.map(bus => (
                    <div key={bus.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2ECC71] rounded-full flex items-center justify-center">
                          <Bus className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                            {bus.busNumber}
                          </p>
                          <p style={{ fontSize: '12px', color: '#666666' }}>
                            {bus.studentsOnBoard} students on board
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
                        <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6">
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', marginBottom: '12px' }}>
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full h-10 bg-[#2ECC71] text-white rounded-xl hover:bg-[#27AE60] transition-colors text-sm font-semibold">
                    Send Broadcast Notification
                  </button>
                  <button className="w-full h-10 bg-white border-2 border-[#E5E7EB] text-[#111111] rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold">
                    Override Route Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
