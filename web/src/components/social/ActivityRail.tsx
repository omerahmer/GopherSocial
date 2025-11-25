import { formatDistanceToNow } from 'date-fns'
import { Activity } from 'lucide-react'

import { useActivityQuery, useHealthQuery } from '@/hooks/useSocialData'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

type ActivityRailProps = {
  compact?: boolean
}

export function ActivityRail({ compact = false }: ActivityRailProps) {
  const { data, isLoading } = useActivityQuery()
  const { data: health } = useHealthQuery()

  if (compact) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-black uppercase tracking-[0.3em]">
            <Activity className="h-5 w-5" />
            Pulse
          </div>
          <Badge variant={health?.ok ? 'success' : 'outline'}>
            {health?.ok ? 'API Live' : 'Offline'}
          </Badge>
        </div>
        {isLoading ? (
          <Skeleton className="h-16" />
        ) : (
          <ul className="space-y-3 text-sm font-semibold">
            {data?.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-1 rounded-xl border-2 border-dashed border-neutral-200 p-3 dark:border-neutral-800"
              >
                <span>{item.message}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {formatDistanceToNow(new Date(item.timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <Card className="border-dashed border-neutral-300 bg-gradient-to-b from-white to-neutral-50 dark:border-neutral-700 dark:from-neutral-950 dark:to-black">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Live Activity</CardTitle>
        <Badge variant={health?.ok ? 'success' : 'outline'}>
          {health?.ok ? 'Backend: Stable' : 'Backend: Offline'}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className="h-16 w-full" key={index} />
          ))}

        {!isLoading &&
          data?.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                'rounded-2xl border-2 p-4 font-semibold uppercase tracking-[0.15em]',
                entry.tone === 'success'
                  ? 'border-emerald-500 bg-emerald-100 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200'
                  : entry.tone === 'warning'
                    ? 'border-amber-500 bg-amber-100 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200'
                    : 'border-neutral-900 bg-white text-neutral-900 dark:border-white dark:bg-neutral-950 dark:text-white',
              )}
            >
              <div className="flex items-center justify-between">
                <span>{entry.message}</span>
                <span className="text-xs text-neutral-600 dark:text-neutral-300">
                  {formatDistanceToNow(new Date(entry.timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  )
}


