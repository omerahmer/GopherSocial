import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'h-12 w-full rounded-xl border-2 border-neutral-900 bg-white px-4 font-semibold uppercase tracking-[0.2em] text-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/30 dark:border-white dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500',
        className,
      )}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }


