export const STORAGE_KEY = 'new-me-progress'
export const STORAGE_KEY_BADGES = 'new-me-badges'

export function loadProgress(): Record<string, any> {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

export function saveProgress(progress: Record<string, any>): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function loadBadges(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY_BADGES)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveBadges(badges: string[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY_BADGES, JSON.stringify(badges))
}

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0]
}

export function getProgressPercentage(completedHabits: number, totalHabits: number): number {
  if (totalHabits === 0) return 0
  return Math.round((completedHabits / totalHabits) * 100)
}

export function getDayProgress(daysCompleted: number, totalDays: number = 30): number {
  return Math.round((daysCompleted / totalDays) * 100)
}

export function getDayNumber(): number {
  const progress = loadProgress()
  const firstDate = progress.firstDate
  if (!firstDate) return 1
  const today = getTodayDate()
  const start = new Date(firstDate)
  const current = new Date(today)
  const diffTime = Math.abs(current.getTime() - start.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  return Math.min(diffDays, 30)
}
