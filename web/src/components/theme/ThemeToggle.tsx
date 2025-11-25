import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = root.classList.contains('dark')
    setIsDark(prefersDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={() => setIsDark((prev) => !prev)}
      className="gap-2"
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      {isDark ? 'Dark' : 'Light'}
    </Button>
  )
}


