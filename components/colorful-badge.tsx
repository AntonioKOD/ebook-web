import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ColorfulBadgeProps {
  children: React.ReactNode
  className?: string
}

export function ColorfulBadge({ children, className }: ColorfulBadgeProps) {
  return <Badge className={cn("bg-accent text-accent-foreground font-medium px-3 py-1", className)}>{children}</Badge>
}

