import { cn } from '@/lib/utils'

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/60',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }


