import { useState } from 'react'
import { LoaderCircle, Plus } from 'lucide-react'

import type { CreatePostPayload } from '@/hooks/useSocialData'
import { useCreatePostMutation, useProfileQuery } from '@/hooks/useSocialData'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

export function FeedComposer() {
  const { data: profile } = useProfileQuery()
  const mutation = useCreatePostMutation()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('signal, drop')

  const canSubmit = title.trim().length > 0 && content.trim().length > 12

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!profile) return

    const payload: CreatePostPayload = {
      title,
      content,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
      user_id: profile.id,
    }

    mutation.mutate(payload, {
      onSuccess: () => {
        setTitle('')
        setContent('')
      },
    })
  }

  return (
    <Card className="relative overflow-hidden border-2 border-neutral-900 bg-white dark:border-white dark:bg-black">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline">New Drop</Badge>
            <Badge variant="outline">Brutalist Feed</Badge>
          </div>
        </div>
        <CardDescription>
          Share progress, signal boosts, or calls-to-action. Posts sync directly with
          the Go backend.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <Avatar fallback={profile?.display_name ?? 'User'} />
            <div className="flex-1 space-y-3">
              <Input
                placeholder="Headline — keep it punchy"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                maxLength={120}
              />
              <Textarea
                rows={4}
                placeholder="Document the build, drop new intel, or request signal..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
              <Input
                placeholder="Tags separated by commas"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
              />
            </div>
          </div>
          <Separator />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Connected as {profile?.username ?? 'anonymous'}
            </div>
            <Button
              type="submit"
              disabled={!canSubmit || mutation.isPending}
              className="gap-2"
            >
              {mutation.isPending ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Publishing
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Ship Update
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}


