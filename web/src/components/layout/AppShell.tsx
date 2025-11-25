import { Flame, Grid2X2, Map, Radio } from 'lucide-react'
import type { PropsWithChildren } from 'react'

import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useHealthQuery } from '@/hooks/useSocialData'

export function AppShell({ children }: PropsWithChildren) {
  const { data } = useHealthQuery()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f1f1f1,_#fafafa)] text-neutral-900 dark:bg-[radial-gradient(circle_at_top,_#0a0a0a,_#050505)] dark:text-white">
      <header className="sticky top-0 z-40 border-b-2 border-neutral-900 bg-white/80 backdrop-blur-xl dark:border-white dark:bg-black/60">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-900 bg-neutral-900 text-white text-xl font-black dark:border-white dark:bg-white dark:text-neutral-900">
              GS
            </div>
            <div>
              <p className="text-2xl font-black uppercase tracking-[0.4em]">
                GopherSocial
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                Brutalist Operating System
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-3 lg:flex">
            {[
              { label: 'Feed', icon: Flame },
              { label: 'Signals', icon: Radio },
              { label: 'Map', icon: Map },
              { label: 'Deck', icon: Grid2X2 },
            ].map((item) => (
              <Button key={item.label} variant="secondary" size="sm" className="gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="rounded-full border-2 border-neutral-900 px-4 py-2 text-xs font-black uppercase tracking-[0.4em] dark:border-white">
              {data?.ok ? 'Backend Linked' : 'Offline'}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 py-10">{children}</main>
    </div>
  )
}


