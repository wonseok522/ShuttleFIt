import { useState } from "react";
import { useNavigate } from "react-router";
import { Calendar, Clock, MapPin, CheckCircle2, ChevronLeft } from "lucide-react";
import { SuccessModal } from "../../components/SuccessModal";

export default function StudentRequest() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    timeWindow: "",
    location: "",
  });
  const navigate = useNavigate();

  const timeWindows = [
    "오후 2:00 - 2:30",
    "오후 2:30 - 3:00",
    "오후 3:00 - 3:30",
    "오후 3:30 - 4:00",
    "오후 4:00 - 4:30",
  ];

  const locations = [
    "강남역 2번 출구",
    "역삼역 3번 출구",
    "선릉역 1번 출구",
    "삼성역 4번 출구",
  ];

  const handleSubmit = () => {
    if (formData.date && formData.timeWindow && formData.location) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/student/home");
      }, 2000);
    }
  };

  if (showSuccess) {
    return (
      <SuccessModal
        title="예약 완료!"
        message="셔틀 예약이 성공적으로 완료되었습니다"
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-[390px] mx-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#E5E7EB] px-6 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6 text-[#111111]" />
          </button>
          <h1 style={{ fontSize: '18px', fontWeight: 600, color: '#111111' }}>
            셔틀 예약하기
          </h1>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Date Picker */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-[#2ECC71]" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>
                날짜 선택
              </span>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full h-14 px-4 rounded-2xl border-2 border-[#E5E7EB] focus:border-[#2ECC71] focus:outline-none"
              style={{ fontSize: '16px' }}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Time Window Selector */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-[#2ECC71]" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>
                시간대 선택
              </span>
            </label>
            <div className="space-y-2">
              {timeWindows.map((time) => (
                <button
                  key={time}
                  onClick={() => setFormData({ ...formData, timeWindow: time })}
                  className={`w-full h-12 px-4 rounded-xl border-2 ${
                    formData.timeWindow === time
                      ? 'border-[#2ECC71] bg-[#2ECC71]/5'
                      : 'border-[#E5E7EB] bg-white'
                  } hover:border-[#2ECC71]/50 transition-colors text-left flex items-center justify-between`}
                >
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#111111' }}>
                    {time}
                  </span>
                  {formData.timeWindow === time && (
                    <div className="w-4 h-4 rounded-full bg-[#2ECC71] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup Location */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#2ECC71]" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>
                픽업 장소
              </span>
            </label>
            <div className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setFormData({ ...formData, location })}
                  className={`w-full h-12 px-4 rounded-xl border-2 ${
                    formData.location === location
                      ? 'border-[#2ECC71] bg-[#2ECC71]/5'
                      : 'border-[#E5E7EB] bg-white'
                  } hover:border-[#2ECC71]/50 transition-colors text-left flex items-center justify-between`}
                >
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#111111' }}>
                    {location}
                  </span>
                  {formData.location === location && (
                    <div className="w-4 h-4 rounded-full bg-[#2ECC71] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Info Notice */}
          <div className="bg-[#2ECC71]/5 border border-[#2ECC71]/20 rounded-xl p-4">
            <p style={{ fontSize: '12px', color: '#666666' }}>
              ℹ️ 예약 마감은 수업 1시간 전입니다.
            </p>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] px-6 py-4">
          <div className="max-w-[390px] mx-auto">
            <button
              onClick={handleSubmit}
              disabled={!formData.date || !formData.timeWindow || !formData.location}
              className={`w-full rounded-2xl transition-colors ${
                formData.date && formData.timeWindow && formData.location
                  ? 'bg-[#2ECC71] text-white hover:bg-[#27AE60]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              style={{ height: '56px', fontSize: '16px', fontWeight: 600 }}
            >
              예약 제출
            </button>
          </div>
        </div>

        {/* Spacer for fixed button */}
        <div style={{ height: '90px' }} />
      </div>
    </div>
  );
}