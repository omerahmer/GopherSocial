import { Compass, LinkIcon, Satellite, Thermometer } from 'lucide-react'

const tiles = [
  {
    title: 'Network Density',
    value: '76%',
    detail: 'High-trust nodes engaged',
    icon: Compass,
  },
  {
    title: 'Collab Slots',
    value: '03',
    detail: 'Available this week',
    icon: LinkIcon,
  },
  {
    title: 'Signal Heat',
    value: 'Strong',
    detail: 'West Coast hours',
    icon: Thermometer,
  },
  {
    title: 'Broadcast Windows',
    value: '2h',
    detail: 'Before peak drop',
    icon: Satellite,
  },
]

export function InsightTiles() {
  return (
    <div className="grid gap-4">
      {tiles.map((tile) => (
        <div
          key={tile.title}
          className="flex items-center justify-between rounded-2xl border-2 border-neutral-900 bg-white p-4 shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] dark:border-white dark:bg-neutral-950"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
              {tile.title}
            </p>
            <p className="text-3xl font-black text-neutral-900 dark:text-white">
              {tile.value}
            </p>
            <p className="text-sm text-neutral-500">{tile.detail}</p>
          </div>
          <tile.icon className="h-10 w-10 text-neutral-400 dark:text-neutral-600" />
        </div>
      ))}
    </div>
  )
}


