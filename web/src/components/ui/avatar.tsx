import * as React from 'react'

import { cn } from '@/lib/utils'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  fallback?: string
}

export function Avatar({ className, src, fallback, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-xl border-2 border-neutral-900 bg-white text-sm font-black uppercase tracking-[0.2em] dark:border-white dark:bg-neutral-950',
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={fallback}
          className="h-full w-full rounded-[10px] object-cover"
        />
      ) : (
        fallback?.slice(0, 2)
      )}
    </div>
  )
}


