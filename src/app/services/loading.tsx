export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="px-6 lg:px-12 pt-32 pb-16">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="h-3 w-32 bg-white/[0.03] rounded animate-pulse" />
          <div className="h-12 w-2/3 bg-white/[0.03] rounded-lg animate-pulse" />
          <div className="h-5 w-1/2 bg-white/[0.03] rounded animate-pulse" />
        </div>
      </div>
      <div className="px-6 lg:px-12 pb-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl bg-white/[0.03] animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
