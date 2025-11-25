import type { Activity, Post, Trend, UserProfile } from '@/types/social'

const now = new Date()

export const demoUser: UserProfile = {
  id: 1,
  username: '@gomitted',
  display_name: 'Gopher Vanguard',
  title: 'Head of Social Systems',
  avatar: null,
  metrics: {
    reach: 128_000,
    cadence: 'Daily cadence engaged',
    alignment: 92,
  },
}

export const demoPosts: Array<Post> = [
  {
    id: 1,
    title: 'Shipping a brutalist drop',
    content:
      'Wrapped the backend event-stream for our community board. Latency now <12ms. Shipping log + metrics soon.',
    created_at: new Date(now.getTime() - 1000 * 60 * 20).toISOString(),
    user_id: 1,
    user: {
      id: 1,
      username: demoUser.username,
      display_name: demoUser.display_name,
      avatar: null,
    },
    tags: ['shipping-log', 'infra'],
    stats: {
      reactions: 318,
      comments: 44,
      reposts: 19,
    },
  },
  {
    id: 2,
    title: 'Community office hours',
    content:
      'Dropping brutalist branding explorations + backend roadmap on Thursday. Need signal on story arc + rollout order.',
    created_at: new Date(now.getTime() - 1000 * 60 * 60 * 2).toISOString(),
    user_id: 1,
    user: {
      id: 1,
      username: demoUser.username,
      display_name: demoUser.display_name,
      avatar: null,
    },
    tags: ['community', 'roadmap'],
    stats: {
      reactions: 188,
      comments: 62,
      reposts: 7,
    },
  },
  {
    id: 3,
    title: 'Signal request',
    content:
      'Need two reference decks for high-contrast social proof screens. Looking for stark typography + live data inserts.',
    created_at: new Date(now.getTime() - 1000 * 60 * 60 * 5).toISOString(),
    user_id: 1,
    user: {
      id: 1,
      username: demoUser.username,
      display_name: demoUser.display_name,
      avatar: null,
    },
    tags: ['ask', 'design'],
    stats: {
      reactions: 142,
      comments: 31,
      reposts: 4,
    },
  },
]

export const demoTrends: Array<Trend> = [
  {
    id: 'momentum',
    label: 'Momentum',
    change: 12,
    category: 'momentum',
  },
  {
    id: 'hype-index',
    label: 'Hype Index',
    change: 7,
    category: 'hype',
  },
  {
    id: 'signal-strength',
    label: 'Signal Strength',
    change: 19,
    category: 'signal',
  },
]

export const demoActivity: Array<Activity> = [
  {
    id: 1,
    message: 'Backend health ping succeeded',
    timestamp: now.toISOString(),
    tone: 'success',
  },
  {
    id: 2,
    message: '2 creators joined the weekly sync',
    timestamp: new Date(now.getTime() - 1000 * 60 * 15).toISOString(),
    tone: 'system',
  },
  {
    id: 3,
    message: 'New mention in #brutalist-drops',
    timestamp: new Date(now.getTime() - 1000 * 60 * 45).toISOString(),
    tone: 'success',
  },
]


