export type Post = {
  id: number
  title: string
  content: string
  tags: Array<string>
  tags: Array<string>
  created_at: string
  updated_at?: string
  user_id: number
  user?: {
    id: number
    username: string
    display_name?: string
    avatar?: string | null
  }
  stats?: {
    reactions: number
    comments: number
    reposts: number
  }
}

export type Trend = {
  id: string
  label: string
  change: number
  category: 'momentum' | 'hype' | 'signal'
}

export type Activity = {
  id: string | number
  message: string
  timestamp: string
  tone: 'system' | 'success' | 'warning'
}

export type UserProfile = {
  id: number
  username: string
  display_name: string
  title: string
  avatar: string | null
  metrics: {
    reach: number
    cadence: string
    alignment: number
  }
}


