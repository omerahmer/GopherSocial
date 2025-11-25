import { formatDistanceToNow } from 'date-fns'
import { MessageCircle, Repeat2, Zap } from 'lucide-react'

import type { Post } from '@/types/social'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="border-2 border-neutral-900 bg-white dark:border-white dark:bg-neutral-950">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-2xl normal-case tracking-tight">
            {post.title}
          </CardTitle>
          <p className="text-sm text-neutral-500">
            {post.user?.display_name ?? 'Anonymous'} ·{' '}
            {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
          </p>
        </div>
        <Badge variant="outline">{post.user?.username ?? `ID-${post.user_id}`}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-100">
          {post.content}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-neutral-200 px-3 py-1 text-xs font-black uppercase tracking-[0.3em] text-neutral-500 dark:border-neutral-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
        <Metric
          icon={Zap}
          label="Reacts"
          value={post.stats?.reactions ?? 0}
          highlight
        />
        <Metric
          icon={MessageCircle}
          label="Replies"
          value={post.stats?.comments ?? 0}
        />
        <Metric icon={Repeat2} label="Relays" value={post.stats?.reposts ?? 0} />
      </CardFooter>
    </Card>
  )
}

type MetricProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  value: number
  highlight?: boolean
}

function Metric({ icon: Icon, label, value, highlight }: MetricProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-full border-2 border-neutral-200 px-3 py-1 dark:border-neutral-800',
        highlight && 'border-neutral-900 bg-neutral-100 dark:border-white dark:bg-white/10',
      )}
    >
      <Icon className="h-4 w-4" />
      <span>
        {value} · {label}
      </span>
    </div>
  )
}


