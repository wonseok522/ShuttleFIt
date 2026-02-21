export function LoadingShimmer() {
  return (
    <div className="animate-pulse">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] mb-4">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB] mb-4">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E5E7EB]">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
}

export function CardShimmer() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  );
}
