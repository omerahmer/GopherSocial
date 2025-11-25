import { TrendingUp } from 'lucide-react'

import { useTrendsQuery } from '@/hooks/useSocialData'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function TrendPanel() {
  const { data, isLoading } = useTrendsQuery()

  return (
    <Card className="border-2 border-neutral-900 bg-white dark:border-white dark:bg-neutral-950">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Trend Monitor</CardTitle>
        <Badge variant="outline">
          <TrendingUp className="mr-2 h-4 w-4" />
          Live
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className="h-20 w-full" key={index} />
          ))}

        {!isLoading &&
          data?.map((trend) => (
            <div
              key={trend.id}
              className="rounded-2xl border-2 border-neutral-200 p-4 dark:border-neutral-800"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {trend.category}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-black">{trend.label}</p>
                <p className="text-xl font-black text-emerald-500">
                  +{trend.change}%
                </p>
              </div>
              <div className="mt-3 h-2 rounded-full bg-neutral-100 dark:bg-neutral-900">
                <div
                  className="h-full rounded-full bg-neutral-900 dark:bg-white"
                  style={{ width: `${Math.min(100, trend.change * 4)}%` }}
                />
              </div>
            </div>
          ))}
      </CardContent>
    </Card>
  )
}


