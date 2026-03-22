export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-[#ff4500]/10 animate-pulse" />
        <div className="w-full max-w-md space-y-4">
          <div className="h-8 bg-white/[0.03] rounded-lg animate-pulse" />
          <div className="h-4 bg-white/[0.03] rounded-lg animate-pulse w-3/4 mx-auto" />
          <div className="h-4 bg-white/[0.03] rounded-lg animate-pulse w-1/2 mx-auto" />
        </div>
        <div className="w-12 h-[2px] bg-[#ff4500]/30 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
