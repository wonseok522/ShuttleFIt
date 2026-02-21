import { Link } from "react-router";
import { Home, ArrowDown, CheckCircle2 } from "lucide-react";

export default function AutomationLogic() {
  const steps = [
    {
      number: 1,
      title: "Student Submits Request",
      description: "Student fills out pickup form with location, date, and time window",
      color: "#2ECC71",
    },
    {
      number: 2,
      title: "System Checks Region",
      description: "Backend validates request and identifies geographic region based on pickup location",
      color: "#2ECC71",
    },
    {
      number: 3,
      title: "Bus Assignment",
      description: "System assigns request to available bus serving that region with capacity",
      color: "#F39C12",
    },
    {
      number: 4,
      title: "Route Optimization",
      description: "Nearest-neighbor algorithm sorts all stops for the assigned bus",
      color: "#F39C12",
    },
    {
      number: 5,
      title: "RoutePlan Creation",
      description: "System creates/updates RoutePlan document with ordered stops and ETAs",
      color: "#9CA3AF",
    },
    {
      number: 6,
      title: "Driver Notification",
      description: "Push notification sent to driver's mobile app with updated route",
      color: "#9CA3AF",
    },
    {
      number: 7,
      title: "Student Sees ETA",
      description: "Student dashboard updates with assigned bus, driver info, and live ETA",
      color: "#2ECC71",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[#2ECC71] hover:text-[#27AE60] mb-4">
            <Home className="w-5 h-5" />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Back to Home</span>
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>
            MVP Automation Logic
          </h1>
          <p style={{ fontSize: '16px', color: '#666666' }}>
            Visual flowchart of the automated route assignment process
          </p>
        </div>

        {/* Flowchart */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] mb-8">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number}>
                {/* Step Card */}
                <div className="relative">
                  {/* Number Badge */}
                  <div
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    <span style={{ fontSize: '20px', fontWeight: 700, color: 'white' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 p-6 rounded-xl border-2" style={{ borderColor: step.color + '40', backgroundColor: step.color + '05' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                )}
              </div>
            ))}

            {/* Success Indicator */}
            <div className="flex justify-center pt-4">
              <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '16px' }}>
              Route Optimization Algorithm
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2ECC71]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2ECC71' }}>1</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                  Start with academy location as the origin point
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2ECC71]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2ECC71' }}>2</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                  Find the nearest unvisited pickup location
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2ECC71]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2ECC71' }}>3</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                  Add to route and mark as visited
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2ECC71]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2ECC71' }}>4</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                  Repeat from current location until all stops are added
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2ECC71]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#2ECC71' }}>5</span>
                </div>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6' }}>
                  Calculate ETAs based on distance and traffic estimates
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '16px' }}>
              Assignment Rules
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-[#2ECC71]/5 rounded-lg border border-[#2ECC71]/20">
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
                  Region Matching
                </p>
                <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
                  Requests are matched to buses serving the same geographic region
                </p>
              </div>
              <div className="p-3 bg-[#2ECC71]/5 rounded-lg border border-[#2ECC71]/20">
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
                  Capacity Check
                </p>
                <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
                  Only assign to buses with available seats for the time window
                </p>
              </div>
              <div className="p-3 bg-[#2ECC71]/5 rounded-lg border border-[#2ECC71]/20">
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
                  Time Window Validation
                </p>
                <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
                  Ensure pickup can be completed within student's requested time
                </p>
              </div>
              <div className="p-3 bg-[#2ECC71]/5 rounded-lg border border-[#2ECC71]/20">
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
                  Cutoff Enforcement
                </p>
                <p style={{ fontSize: '12px', color: '#666666', lineHeight: '1.5' }}>
                  Block requests submitted less than 1 hour before lesson time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Improvements Note */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span style={{ fontSize: '24px' }}>🚀</span>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                Future Enhancement: Advanced Route Optimization
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.6', marginBottom: '12px' }}>
                The MVP uses a simple nearest-neighbor algorithm for route optimization. Future versions will implement:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ fontSize: '14px', color: '#2ECC71' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#666666' }}>
                    Genetic algorithms for global route optimization
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ fontSize: '14px', color: '#2ECC71' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#666666' }}>
                    Real-time traffic data integration
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ fontSize: '14px', color: '#2ECC71' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#666666' }}>
                    Machine learning for ETA prediction
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ fontSize: '14px', color: '#2ECC71' }}>✓</span>
                  <span style={{ fontSize: '14px', color: '#666666' }}>
                    Dynamic re-routing based on delays
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
