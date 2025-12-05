export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="text-2xl font-bold">
        <span className="text-foreground">Grow</span>
        <span className="bg-gradient-to-r from-[#1C75BC] via-[#00A9CE] to-[#39B68D] bg-clip-text text-transparent">
          byte
        </span>
      </span>
    </span>
  )
}

