import { PostCard } from '@/components/social/PostCard'
import { Skeleton } from '@/components/ui/skeleton'
import { useFeedQuery } from '@/hooks/useSocialData'

export function FeedList() {
  const { data, isLoading } = useFeedQuery()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-64 w-full" key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}


