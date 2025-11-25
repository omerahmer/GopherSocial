import type { Activity, Post, Trend, UserProfile } from '@/types/social'

import { demoActivity, demoPosts, demoTrends, demoUser } from '@/data/demo-social'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/v1'

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  })

  if (!response.ok) {
    throw new Error(`Request failed ${response.status}`)
  }

  return response.json() as Promise<T>
}

export async function fetchPosts(): Promise<Array<Post>> {
  try {
    const posts = await fetchJSON<Array<Post>>('/posts')
    return posts.map((post) => ({
      ...post,
      user:
        post.user ??
        demoUser, // until backend sends embedded user we display the owner
      stats: post.stats ?? {
        reactions: Math.floor(Math.random() * 400),
        comments: Math.floor(Math.random() * 60),
        reposts: Math.floor(Math.random() * 25),
      },
    }))
  } catch (error) {
    console.warn('Falling back to demo posts:', error)
    return demoPosts
  }
}

export type CreatePostPayload = {
  title: string
  content: string
  tags: Array<string>
  user_id: number
}

export async function createPost(payload: CreatePostPayload): Promise<Post> {
  try {
    const post = await fetchJSON<Post>('/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
    return post
  } catch (error) {
    console.warn('Unable to create post, returning emulated payload:', error)
    return {
      id: Date.now(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...payload,
      user: demoUser,
      stats: {
        reactions: 0,
        comments: 0,
        reposts: 0,
      },
    }
  }
}

export async function fetchTrends(): Promise<Array<Trend>> {
  try {
    return await fetchJSON<Array<Trend>>('/trends')
  } catch {
    return demoTrends
  }
}

export async function fetchActivity(): Promise<Array<Activity>> {
  try {
    return await fetchJSON<Array<Activity>>('/activity')
  } catch {
    return demoActivity
  }
}

export async function fetchProfile(): Promise<UserProfile> {
  try {
    return await fetchJSON<UserProfile>('/users/me')
  } catch {
    return demoUser
  }
}

export async function fetchHealth(): Promise<{ ok: boolean }> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`)
    return { ok: res.ok }
  } catch {
    return { ok: false }
  }
}


