import { useState } from "react";
import { Link } from "react-router";
import { Bus, MapPin, Clock, User, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { LoadingShimmer } from "../../components/LoadingShimmer";

type AssignmentStatus = "pending" | "assigned" | "empty";

export default function StudentHome() {
  const [status, setStatus] = useState<AssignmentStatus>("assigned");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data
  const studentName = "Wonseok";
  const busNumber = "2호차";
  const driverName = "김기사";
  const eta = "12분";
  const pickupLocation = "강남역 2번 출구";
  const lessonTime = "오후 3:00 - 5:00";

  const StatusCard = () => {
    if (isLoading) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="w-10 h-10 text-[#2ECC71] animate-spin" />
            <p style={{ fontSize: '14px', color: '#666666', marginTop: '12px' }}>
              로딩 중...
            </p>
          </div>
        </div>
      );
    }

    if (status === "empty") {
      return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
            오늘 예약이 없습니다
          </h3>
          <p style={{ fontSize: '14px', color: '#666666' }}>
            셔틀을 예약해주세요
          </p>
        </div>
      );
    }

    if (status === "pending") {
      return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 rounded-full" style={{ backgroundColor: '#9CA3AF20' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#9CA3AF' }}>
                배차 대기 중
              </span>
            </div>
          </div>
          <p style={{ fontSize: '16px', color: '#666666' }}>
            기사님 배정 중입니다
          </p>
          <div className="mt-4 flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-[#9CA3AF] animate-spin" />
          </div>
        </div>
      );
    }

    // Assigned status
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
        <div className="flex items-center justify-between mb-4">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: '#2ECC7120' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#2ECC71' }}>
              배차 완료
            </span>
          </div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Bus className="w-6 h-6 text-[#2ECC71]" />
          </motion.div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Bus className="w-5 h-5 text-[#666666]" />
            <div>
              <p style={{ fontSize: '12px', color: '#666666' }}>Bus</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                {busNumber}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#666666]" />
            <div>
              <p style={{ fontSize: '12px', color: '#666666' }}>Driver</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                {driverName}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#666666]" />
            <div>
              <p style={{ fontSize: '12px', color: '#666666' }}>ETA</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#2ECC71' }}>
                {eta}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-[390px] mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111' }}>
            안녕하세요, {studentName}님
          </h1>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Status Card */}
          <StatusCard />

          {/* Additional Info Cards */}
          {status === "assigned" && (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#2ECC71]" />
                  <div className="flex-1">
                    <p style={{ fontSize: '12px', color: '#666666' }}>Pickup Location</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                      {pickupLocation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#2ECC71]" />
                  <div className="flex-1">
                    <p style={{ fontSize: '12px', color: '#666666' }}>Lesson Time</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                      {lessonTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '12px' }}>
                  실시간 위치
                </p>
                <div className="h-48 rounded-xl bg-gradient-to-br from-green-50 via-blue-50 to-green-50 border border-[#E5E7EB] overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mb-2"
                      >
                        <Bus className="w-8 h-8 text-[#2ECC71] mx-auto" />
                      </motion.div>
                      <p style={{ fontSize: '14px', color: '#666666' }}>🗺️ Map View</p>
                      <div className="mt-2 w-3 h-3 bg-red-500 rounded-full mx-auto animate-pulse" />
                      <p style={{ fontSize: '12px', color: '#666666', marginTop: '4px' }}>Your Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Status Toggle Buttons (for demo) */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
            <p style={{ fontSize: '12px', color: '#666666', marginBottom: '12px' }}>
              Demo Controls:
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setStatus("assigned")}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  status === "assigned" ? 'bg-[#2ECC71] text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Assigned
              </button>
              <button
                onClick={() => setStatus("pending")}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  status === "pending" ? 'bg-[#9CA3AF] text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setStatus("empty")}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  status === "empty" ? 'bg-gray-400 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Empty
              </button>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => setIsLoading(false), 2000);
                }}
                className="px-3 py-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-600"
              >
                Loading
              </button>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-6 py-4">
          <div className="max-w-[390px] mx-auto space-y-3">
            <Link to="/student/request">
              <button
                className="w-full bg-[#2ECC71] text-white rounded-2xl hover:bg-[#27AE60] transition-colors"
                style={{ height: '56px', fontSize: '16px', fontWeight: 600 }}
              >
                셔틀 예약하기
              </button>
            </Link>
            
            {status === "assigned" && (
              <button
                className="w-full bg-white text-[#E74C3C] border-2 border-[#E74C3C] rounded-2xl hover:bg-[#E74C3C]/5 transition-colors"
                style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
              >
                예약 취소
              </button>
            )}
          </div>
        </div>
        
        {/* Spacer for fixed buttons */}
        <div style={{ height: status === "assigned" ? '140px' : '90px' }} />
      </div>
    </div>
  );
}