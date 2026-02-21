import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";

export default function StudentOnboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+82",
    branch: "",
    location: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const branches = [
    "강남 Academy",
    "서초 Academy",
    "송파 Academy",
    "강동 Academy",
  ];

  const locations = [
    "강남역 2번 출구",
    "역삼역 3번 출구",
    "선릉역 1번 출구",
    "삼성역 4번 출구",
  ];

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }
    if (step === 2 && !formData.phone.trim()) {
      newErrors.phone = "전화번호를 입력해주세요";
    } else if (step === 2 && !/^\d{9,11}$/.test(formData.phone)) {
      newErrors.phone = "올바른 전화번호를 입력해주세요";
    }
    if (step === 3 && !formData.branch) {
      newErrors.branch = "학원을 선택해주세요";
    }
    if (step === 4 && !formData.location) {
      newErrors.location = "픽업 장소를 선택해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step === 4) {
        // Complete onboarding
        navigate("/student/home");
      } else {
        setStep(step + 1);
        setErrors({});
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Progress Bar */}
      <div className="bg-white border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-2 h-2 rounded-full ${
                  num <= step ? "bg-[#2ECC71]" : "bg-[#E5E7EB]"
                }`}
              />
            ))}
          </div>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#666666', textAlign: 'center' }}>
            Step {step} of 4
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 px-6 py-8 max-w-[390px] w-full mx-auto">
          {/* Step 1: Name */}
          {step === 1 && (
            <div className="flex flex-col h-full">
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '40px' }}>
                이름을 입력해주세요
              </h1>
              
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="이름"
                  className={`w-full h-14 px-4 rounded-2xl border-2 ${
                    errors.name ? 'border-[#E74C3C]' : 'border-[#E5E7EB]'
                  } focus:border-[#2ECC71] focus:outline-none transition-colors`}
                  style={{ fontSize: '16px' }}
                />
                {errors.name && (
                  <p style={{ fontSize: '12px', color: '#E74C3C', marginTop: '8px' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mt-4 p-4 bg-[#2ECC71]/5 rounded-xl border border-[#2ECC71]/20">
                <p style={{ fontSize: '12px', color: '#666666' }}>
                  💾 Data stored under StudentProfile
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Phone */}
          {step === 2 && (
            <div className="flex flex-col h-full">
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '40px' }}>
                전화번호를 입력해주세요
              </h1>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="h-14 px-4 rounded-2xl border-2 border-[#E5E7EB] focus:border-[#2ECC71] focus:outline-none"
                    style={{ fontSize: '16px', width: '100px' }}
                  >
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+86">🇨🇳 +86</option>
                  </select>
                  
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    placeholder="전화번호 (숫자만)"
                    className={`flex-1 h-14 px-4 rounded-2xl border-2 ${
                      errors.phone ? 'border-[#E74C3C]' : 'border-[#E5E7EB]'
                    } focus:border-[#2ECC71] focus:outline-none transition-colors`}
                    style={{ fontSize: '16px' }}
                  />
                </div>
                
                {errors.phone && (
                  <p style={{ fontSize: '12px', color: '#E74C3C' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mt-4 p-4 bg-[#2ECC71]/5 rounded-xl border border-[#2ECC71]/20">
                <p style={{ fontSize: '12px', color: '#666666' }}>
                  💾 Data stored under StudentProfile
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Branch */}
          {step === 3 && (
            <div className="flex flex-col h-full">
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '40px' }}>
                학원을 선택해주세요
              </h1>
              
              <div className="space-y-3">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setFormData({ ...formData, branch })}
                    className={`w-full h-14 px-4 rounded-2xl border-2 ${
                      formData.branch === branch
                        ? 'border-[#2ECC71] bg-[#2ECC71]/5'
                        : 'border-[#E5E7EB] bg-white'
                    } hover:border-[#2ECC71]/50 transition-colors text-left flex items-center justify-between`}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 500, color: '#111111' }}>
                      {branch}
                    </span>
                    {formData.branch === branch && (
                      <div className="w-5 h-5 rounded-full bg-[#2ECC71] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )}
                  </button>
                ))}
                {errors.branch && (
                  <p style={{ fontSize: '12px', color: '#E74C3C' }}>
                    {errors.branch}
                  </p>
                )}
              </div>

              <div className="mt-4 p-4 bg-[#2ECC71]/5 rounded-xl border border-[#2ECC71]/20">
                <p style={{ fontSize: '12px', color: '#666666' }}>
                  🏢 Used for region-based bus assignment
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Pickup Location */}
          {step === 4 && (
            <div className="flex flex-col h-full">
              <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '40px' }}>
                자주 이용하실 픽업 장소를 선택해주세요
              </h1>
              
              <div className="space-y-3 mb-4">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setFormData({ ...formData, location: loc })}
                    className={`w-full h-14 px-4 rounded-2xl border-2 ${
                      formData.location === loc
                        ? 'border-[#2ECC71] bg-[#2ECC71]/5'
                        : 'border-[#E5E7EB] bg-white'
                    } hover:border-[#2ECC71]/50 transition-colors text-left flex items-center justify-between`}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 500, color: '#111111' }}>
                      {loc}
                    </span>
                    {formData.location === loc && (
                      <div className="w-5 h-5 rounded-full bg-[#2ECC71] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )}
                  </button>
                ))}
                {errors.location && (
                  <p style={{ fontSize: '12px', color: '#E74C3C' }}>
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Map Preview */}
              <div className="h-48 rounded-2xl bg-gray-200 border border-[#E5E7EB] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
                  <p style={{ fontSize: '14px', color: '#666666' }}>🗺️ Map Preview</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-[#2ECC71]/5 rounded-xl border border-[#2ECC71]/20">
                <p style={{ fontSize: '12px', color: '#666666' }}>
                  📍 Location mapped to geo-coordinates
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Bottom Button */}
        <div className="bg-white border-t border-[#E5E7EB] px-6 py-4">
          <div className="max-w-[390px] mx-auto">
            <button
              onClick={handleNext}
              className="w-full bg-[#2ECC71] text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-[#27AE60] transition-colors"
              style={{ height: '56px', fontSize: '16px', fontWeight: 600 }}
            >
              {step === 4 ? '완료' : '다음'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
