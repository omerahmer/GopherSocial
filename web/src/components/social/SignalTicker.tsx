const signals = [
  { label: 'Latency', value: '11.8ms', delta: '-2.4' },
  { label: 'Creators Online', value: '184', delta: '+12' },
  { label: 'Mentions', value: '62', delta: '+8' },
  { label: 'Engagement', value: '4.7%', delta: '+0.9' },
]

export function SignalTicker() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border-2 border-neutral-900 bg-white p-4 text-sm font-semibold uppercase tracking-[0.3em] shadow-[6px_6px_0_0_rgba(0,0,0,0.9)] dark:border-white dark:bg-neutral-950">
      {signals.map((signal) => (
        <div key={signal.label} className="flex flex-col">
          <span className="text-neutral-500 dark:text-neutral-400">
            {signal.label}
          </span>
          <span className="text-2xl text-neutral-900 dark:text-white">
            {signal.value}
          </span>
          <span className="text-xs text-emerald-600 dark:text-emerald-400">
            {signal.delta}
          </span>
        </div>
      ))}
    </div>
  )
}


