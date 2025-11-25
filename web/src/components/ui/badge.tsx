import * as React from 'react'

import { cn } from '@/lib/utils'

const variants = {
  default:
    'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-950 dark:border-white',
  outline:
    'border-neutral-900 text-neutral-900 dark:border-white dark:text-white',
  success: 'border-emerald-600 bg-emerald-500/20 text-emerald-900',
} satisfies Record<string, string>

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black uppercase tracking-[0.3em]',
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
)
Badge.displayName = 'Badge'

export { Badge }


