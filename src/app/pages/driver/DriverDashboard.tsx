import { useState } from "react";
import { Bus, MapPin, Clock, Navigation, CheckCircle2, XCircle, User, WifiOff } from "lucide-react";

type StopStatus = "pending" | "picked_up" | "no_show";

interface Stop {
  id: string;
  studentName: string;
  address: string;
  timeWindow: string;
  distance: string;
  status: StopStatus;
}

export default function DriverDashboard() {
  const [routeStarted, setRouteStarted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [stops, setStops] = useState<Stop[]>([
    {
      id: "1",
      studentName: "김민준",
      address: "강남역 2번 출구",
      timeWindow: "오후 2:30 - 3:00",
      distance: "1.2 km",
      status: "pending",
    },
    {
      id: "2",
      studentName: "이서윤",
      address: "역삼역 3번 출구",
      timeWindow: "오후 3:00 - 3:30",
      distance: "2.5 km",
      status: "pending",
    },
    {
      id: "3",
      studentName: "박지우",
      address: "선릉역 1번 출구",
      timeWindow: "오후 3:15 - 3:45",
      distance: "3.1 km",
      status: "pending",
    },
    {
      id: "4",
      studentName: "최하은",
      address: "삼성역 4번 출구",
      timeWindow: "오후 3:30 - 4:00",
      distance: "4.3 km",
      status: "pending",
    },
  ]);

  const busNumber = "2호차";
  const totalStops = stops.length;
  const completedStops = stops.filter(s => s.status === "picked_up").length;
  const estimatedDuration = "45분";

  const updateStopStatus = (id: string, status: StopStatus) => {
    setStops(stops.map(stop => 
      stop.id === id ? { ...stop, status } : stop
    ));
  };

  const getStatusColor = (status: StopStatus) => {
    switch (status) {
      case "picked_up": return "#2ECC71";
      case "no_show": return "#E74C3C";
      default: return "#9CA3AF";
    }
  };

  const getStatusText = (status: StopStatus) => {
    switch (status) {
      case "picked_up": return "탑승 완료";
      case "no_show": return "노쇼";
      default: return "대기중";
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-md mx-auto">
        {/* Offline Banner */}
        {!isOnline && (
          <div className="bg-[#E74C3C] text-white px-6 py-3 flex items-center gap-2">
            <WifiOff className="w-5 h-5" />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>
              오프라인 - 연결을 확인해주세요
            </span>
          </div>
        )}

        {/* Header */}
        <div className="bg-white border-b border-[#E5E7EB] px-6 py-6">
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>
            오늘의 운행
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>
              실시간 위치 공유 중
            </span>
          </div>
        </div>

        {/* Summary Card */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] mb-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Bus className="w-6 h-6 text-[#2ECC71] mx-auto mb-2" />
                <p style={{ fontSize: '12px', color: '#666666' }}>Bus</p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#111111' }}>
                  {busNumber}
                </p>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 text-[#2ECC71] mx-auto mb-2" />
                <p style={{ fontSize: '12px', color: '#666666' }}>Total Stops</p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#111111' }}>
                  {completedStops}/{totalStops}
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-6 h-6 text-[#2ECC71] mx-auto mb-2" />
                <p style={{ fontSize: '12px', color: '#666666' }}>Duration</p>
                <p style={{ fontSize: '18px', fontWeight: 700, color: '#111111' }}>
                  {estimatedDuration}
                </p>
              </div>
            </div>
          </div>

          {/* Route List */}
          <div className="mb-6">
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '16px' }}>
              경로 목록
            </h2>
            <div className="space-y-4">
              {stops.map((stop, index) => (
                <div
                  key={stop.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] relative"
                >
                  {/* Stop Number Badge */}
                  <div className="absolute -left-3 top-5 w-8 h-8 rounded-full bg-[#2ECC71] text-white flex items-center justify-center shadow-md">
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 ml-6">
                      <User className="w-4 h-4 text-[#666666]" />
                      <span style={{ fontSize: '16px', fontWeight: 600, color: '#111111' }}>
                        {stop.studentName}
                      </span>
                    </div>
                    <div
                      className="px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${getStatusColor(stop.status)}20` }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: getStatusColor(stop.status),
                        }}
                      >
                        {getStatusText(stop.status)}
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-2 ml-6">
                    <MapPin className="w-4 h-4 text-[#666666] mt-0.5" />
                    <p style={{ fontSize: '14px', color: '#666666' }}>
                      {stop.address}
                    </p>
                  </div>

                  {/* Time and Distance */}
                  <div className="flex items-center gap-4 mb-3 ml-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#666666]" />
                      <span style={{ fontSize: '12px', color: '#666666' }}>
                        {stop.timeWindow}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Navigation className="w-4 h-4 text-[#666666]" />
                      <span style={{ fontSize: '12px', color: '#666666' }}>
                        {stop.distance}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {stop.status === "pending" && (
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => updateStopStatus(stop.id, "picked_up")}
                        className="flex-1 h-10 bg-[#2ECC71] text-white rounded-xl flex items-center justify-center gap-2 hover:bg-[#27AE60] transition-colors"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        탑승 완료
                      </button>
                      <button
                        onClick={() => updateStopStatus(stop.id, "no_show")}
                        className="flex-1 h-10 bg-white border-2 border-[#E74C3C] text-[#E74C3C] rounded-xl flex items-center justify-center gap-2 hover:bg-[#E74C3C]/5 transition-colors"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        <XCircle className="w-4 h-4" />
                        노쇼
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Demo Controls */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB] mb-6">
            <p style={{ fontSize: '12px', color: '#666666', marginBottom: '12px' }}>
              Demo Controls:
            </p>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className="px-3 py-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-600"
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-6 py-4">
          <div className="max-w-md mx-auto space-y-3">
            {!routeStarted ? (
              <button
                onClick={() => setRouteStarted(true)}
                className="w-full bg-[#2ECC71] text-white rounded-2xl hover:bg-[#27AE60] transition-colors"
                style={{ height: '56px', fontSize: '16px', fontWeight: 600 }}
              >
                운행 시작
              </button>
            ) : (
              <button
                onClick={() => setRouteStarted(false)}
                className="w-full bg-[#E74C3C] text-white rounded-2xl hover:bg-[#C0392B] transition-colors"
                style={{ height: '56px', fontSize: '16px', fontWeight: 600 }}
              >
                운행 종료
              </button>
            )}
            
            {/* Floating Navigation Button */}
            <button
              className="w-full bg-white border-2 border-[#2ECC71] text-[#2ECC71] rounded-2xl hover:bg-[#2ECC71]/5 transition-colors flex items-center justify-center gap-2"
              style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
            >
              <Navigation className="w-5 h-5" />
              내비게이션 열기
            </button>
          </div>
        </div>

        {/* Spacer for fixed buttons */}
        <div style={{ height: '140px' }} />
      </div>
    </div>
  );
}
