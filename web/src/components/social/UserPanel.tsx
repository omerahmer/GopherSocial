import { Flame, Sparkles, Star } from 'lucide-react'

import { useProfileQuery } from '@/hooks/useSocialData'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const quickStats = [
  { label: 'Signal', value: '9.2', icon: Star },
  { label: 'Cadence', value: 'Daily', icon: Flame },
  { label: 'Hype', value: 'Surging', icon: Sparkles },
]

export function UserPanel() {
  const { data, isLoading } = useProfileQuery()

  if (isLoading || !data) {
    return <Skeleton className="h-72 w-full" />
  }

  return (
    <Card className="border-2 border-neutral-900 bg-white dark:border-white dark:bg-neutral-950">
      <CardHeader className="flex flex-col items-start gap-4">
        <Badge variant="outline">Operator</Badge>
        <div className="flex items-center gap-4">
          <Avatar fallback={data.display_name} />
          <div>
            <p className="text-lg font-black uppercase tracking-[0.3em]">
              {data.display_name}
            </p>
            <p className="text-sm text-neutral-500">{data.title}</p>
            <p className="text-sm text-neutral-500">{data.username}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-3 gap-2">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start gap-2 rounded-xl border-2 border-neutral-200 p-3 text-left uppercase tracking-[0.2em] dark:border-neutral-800"
            >
              <stat.icon className="h-4 w-4" />
              <span className="text-xs text-neutral-500">{stat.label}</span>
              <span className="text-lg font-black text-neutral-900 dark:text-white">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-2 border-neutral-900 bg-neutral-100 p-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-700 dark:border-white dark:bg-neutral-900 dark:text-neutral-100">
          Reach · {Intl.NumberFormat('en', { notation: 'compact' }).format(data.metrics.reach)}{' '}
          · Alignment {data.metrics.alignment}%
        </div>
      </CardContent>
    </Card>
  )
}


