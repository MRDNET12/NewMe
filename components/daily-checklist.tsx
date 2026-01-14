'use client'

import { useState, useEffect } from 'react'
import { HABITS } from '@/types'
import { HabitCard } from './habit-card'
import { loadProgress, saveProgress, getTodayDate, getDayNumber } from '@/lib/storage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Calendar, Flame } from 'lucide-react'

export function DailyChecklist() {
  const [completedHabits, setCompletedHabits] = useState<Set<string>>(new Set())
  const [dayNumber, setDayNumber] = useState(1)

  useEffect(() => {
    const today = getTodayDate()
    const progress = loadProgress()
    const todayData = progress[today] || { completedHabits: [] }
    setCompletedHabits(new Set(todayData.completedHabits))
    setDayNumber(getDayNumber())
  }, [])

  const toggleHabit = (habitId: string) => {
    const newCompleted = new Set(completedHabits)
    if (newCompleted.has(habitId)) {
      newCompleted.delete(habitId)
    } else {
      newCompleted.add(habitId)
    }
    setCompletedHabits(newCompleted)

    const today = getTodayDate()
    const progress = loadProgress()
    if (!progress[today]) {
      progress[today] = { completedHabits: [], mood: 5, note: '' }
    }
    progress[today].completedHabits = Array.from(newCompleted)

    if (!progress.firstDate) {
      progress.firstDate = today
    }

    saveProgress(progress)
  }

  const progressValue = (completedHabits.size / HABITS.length) * 100

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-900">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <span>Bonjour, prête pour ton jour {dayNumber} !</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-purple-700">Jour {dayNumber} / 30</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">
                {completedHabits.size} / {HABITS.length} habitudes
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-purple-700 font-medium">Progression du jour</span>
              <span className="text-purple-900 font-bold">{Math.round(progressValue)}%</span>
            </div>
            <Progress value={progressValue} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {HABITS.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completed={completedHabits.has(habit.id)}
            onToggle={() => toggleHabit(habit.id)}
          />
        ))}
      </div>
    </div>
  )
}
