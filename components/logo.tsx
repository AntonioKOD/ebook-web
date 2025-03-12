import { BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  textClassName?: string
  showText?: boolean
}

export function Logo({ className, iconClassName, textClassName, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-secondary rounded-md blur-sm opacity-70"></div>
        <div className="relative bg-primary rounded-md p-1">
          <BarChart3 className={cn("h-6 w-6 text-white", iconClassName)} strokeWidth={2.5} />
        </div>
      </div>
      {showText && (
        <span className={cn("font-gristela tracking-tight text-primary", textClassName)}>
          Business<span className="text-accent">Insights</span>
        </span>
      )}
    </div>
  )
}

