import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const variantClasses = {
  default:
    'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]',
  secondary:
    'bg-white text-neutral-900 border-2 border-neutral-900 hover:-translate-y-0.5 hover:bg-neutral-100 dark:bg-neutral-950 dark:text-white dark:border-white',
  ghost: 'border-0 bg-transparent hover:bg-neutral-900/5 dark:hover:bg-white/10',
  destructive:
    'bg-red-600 text-white hover:bg-red-500 hover:shadow-[4px_4px_0_0_rgba(220,38,38,0.8)]',
} satisfies Record<string, string>

const sizeClasses = {
  default: 'h-11 px-6 text-sm font-semibold tracking-wide',
  sm: 'h-9 rounded-lg px-4 text-xs uppercase tracking-[0.2em]',
  lg: 'h-14 rounded-2xl px-8 text-base',
  icon: 'h-11 w-11',
} satisfies Record<string, string>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: keyof typeof variantClasses
  size?: keyof typeof sizeClasses
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-xl border-2 border-neutral-900 font-black uppercase tracking-[0.2em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/30 disabled:pointer-events-none disabled:opacity-50 dark:border-white',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }


