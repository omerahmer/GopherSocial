import { createFileRoute } from '@tanstack/react-router'
import { Flame } from 'lucide-react'

import { ActivityRail } from '@/components/social/ActivityRail'
import { FeedComposer } from '@/components/social/FeedComposer'
import { FeedList } from '@/components/social/FeedList'
import { InsightTiles } from '@/components/social/InsightTiles'
import { SignalTicker } from '@/components/social/SignalTicker'
import { TrendPanel } from '@/components/social/TrendPanel'
import { UserPanel } from '@/components/social/UserPanel'

export const Route = createFileRoute('/')({
  component: () => <LandingExperience />,
})

function LandingExperience() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border-2 border-neutral-900 bg-gradient-to-br from-zinc-50 via-white to-neutral-100 p-10 text-neutral-950 shadow-[12px_12px_0_0_rgba(0,0,0,0.9)] dark:border-zinc-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black dark:text-white">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-neutral-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 dark:border-white dark:text-white">
              <Flame className="h-4 w-4" />
              GopherSocial • Live
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
                Social infrastructure for builders
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-neutral-950 sm:text-5xl lg:text-6xl dark:text-zinc-50">
                Brutalist, real-time social OS for ambitious teams.
              </h1>
            </div>

            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Connect to the Go backend instantly, orchestrate content, and keep
              strategy aligned. Powered by TanStack Router + Query with
              first-class shadcn components, tuned for brutalist aesthetics.
            </p>

            <SignalTicker />
          </div>

          <div className="ml-auto flex min-w-[260px] max-w-sm flex-col gap-4 rounded-2xl border-2 border-neutral-900 bg-white/80 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] dark:border-white dark:bg-black/50">
            <p className="text-xs uppercase tracking-[0.5em] text-neutral-500 dark:text-neutral-400">
              Backend status
            </p>
            <ActivityRail compact />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[280px_1fr_320px]">
        <div className="space-y-6">
          <UserPanel />
          <InsightTiles />
        </div>

        <div className="space-y-6">
          <FeedComposer />
          <FeedList />
        </div>

        <div className="space-y-6">
          <TrendPanel />
          <ActivityRail />
        </div>
      </section>
    </div>
  )
}
