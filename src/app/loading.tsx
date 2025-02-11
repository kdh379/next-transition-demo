export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
      <div className="relative bg-white/90 rounded-xl p-6 flex flex-col items-center gap-3 shadow-lg animate-scale-fade-in">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full" />
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          데이터를 불러오고 있습니다...
        </span>
      </div>
    </div>
  );
}