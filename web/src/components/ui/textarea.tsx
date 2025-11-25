import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-xl border-2 border-neutral-900 bg-white px-4 py-4 text-base font-semibold text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/30 dark:border-white dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-500',
        className,
      )}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }


