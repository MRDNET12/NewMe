'use client'

import { useState, useEffect } from 'react'
import { loadProgress, getDayProgress, getTodayDate } from '@/lib/storage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Calendar, TrendingUp, CheckCircle2 } from 'lucide-react'

export function ProgressTracker() {
  const [daysCompleted, setDaysCompleted] = useState(0)
  const [totalHabitsCompleted, setTotalHabitsCompleted] = useState(0)
  const [perfectDays, setPerfectDays] = useState(0)

  useEffect(() => {
    const progress = loadProgress()
    const entries = Object.entries(progress).filter(([key]) => key !== 'firstDate')
    
    const days = entries.length
    const habits = entries.reduce((sum, [, data]) => sum + (data.completedHabits?.length || 0), 0)
    const perfect = entries.filter(([, data]) => data.completedHabits?.length === 13).length

    setDaysCompleted(days)
    setTotalHabitsCompleted(habits)
    setPerfectDays(perfect)
  }, [])

  const dayProgress = getDayProgress(daysCompleted, 30)
  const today = getTodayDate()
  const progress = loadProgress()
  const todayData = progress[today]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-500" />
          Progression sur 30 jours
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              Jours complétés
            </span>
            <span className="font-bold text-purple-900">{daysCompleted} / 30</span>
          </div>
          <Progress value={dayProgress} className="h-3" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">{daysCompleted}</div>
            <div className="text-xs text-purple-600 mt-1">Jours actifs</div>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <div className="text-2xl font-bold text-pink-700">{totalHabitsCompleted}</div>
            <div className="text-xs text-pink-600 mt-1">Habitudes totales</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-700">{perfectDays}</div>
            <div className="text-xs text-orange-600 mt-1">Jours parfaits</div>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Jour aujourd'hui : {todayData ? '✓ Enregistré' : '⏳ À compléter'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
