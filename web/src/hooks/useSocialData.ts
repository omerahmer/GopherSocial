import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { CreatePostPayload } from '@/lib/api'
import {
  createPost,
  fetchActivity,
  fetchHealth,
  fetchPosts,
  fetchProfile,
  fetchTrends,
} from '@/lib/api'
import { demoActivity, demoPosts, demoTrends, demoUser } from '@/data/demo-social'

export const queryKeys = {
  posts: ['posts'],
  trends: ['trends'],
  activity: ['activity'],
  profile: ['profile'],
  health: ['health'],
} as const

export function useFeedQuery() {
  return useQuery({
    queryKey: queryKeys.posts,
    queryFn: fetchPosts,
    placeholderData: demoPosts,
    staleTime: 1000 * 60,
  })
}

export function useProfileQuery() {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: fetchProfile,
    placeholderData: demoUser,
    staleTime: 1000 * 60 * 5,
  })
}

export function useTrendsQuery() {
  return useQuery({
    queryKey: queryKeys.trends,
    queryFn: fetchTrends,
    placeholderData: demoTrends,
    staleTime: 1000 * 60,
  })
}

export function useActivityQuery() {
  return useQuery({
    queryKey: queryKeys.activity,
    queryFn: fetchActivity,
    placeholderData: demoActivity,
    refetchInterval: 1000 * 30,
  })
}

export function useHealthQuery() {
  return useQuery({
    queryKey: queryKeys.health,
    queryFn: fetchHealth,
    refetchInterval: 1000 * 20,
  })
}

export function useCreatePostMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.posts })
    },
  })
}

export type { CreatePostPayload }


