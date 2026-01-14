'use client'

import { HABITS } from '@/types'
import { HabitCard } from './habit-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'
import { useState } from 'react'

export function HabitDetails() {
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null)

  const habit = selectedHabit ? HABITS.find(h => h.id === selectedHabit) : null

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-500" />
          Les 13 Piliers de New Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {HABITS.map((habit) => (
            <Dialog key={habit.id}>
              <DialogTrigger asChild>
                <button
                  className="text-left p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{habit.emoji}</span>
                    <div className="flex-1">
                      <div className="font-semibold">{habit.title}</div>
                      <div className="text-xs text-gray-500">P-{habit.pillar}</div>
                    </div>
                    <div className="text-purple-500">→</div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    <span className="text-4xl">{habit.emoji}</span>
                    <div>
                      <div>{habit.title}</div>
                      <div className="text-sm font-normal text-gray-500 mt-1">
                        Pilier {habit.pillar}
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                  <div className="prose prose-sm">
                    <p className="text-gray-700 leading-relaxed">
                      {habit.description}
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-purple-900 mb-2">💡 Conseil de Glowee</div>
                    <p className="text-sm text-purple-700">
                      {habit.pillar === 1 && '"Marche. Vraiment. Tu verras grave la différence."'}
                      {habit.pillar === 2 && '"Tu vas voir ton ventre changer."'}
                      {habit.pillar === 3 && '"Le but, c\'est de glow de l\'extérieur, mais aussi de l\'intérieur."'}
                      {habit.pillar === 5 && '"Tu verras grave la différence."'}
                      {habit.pillar === 6 && '"Ton visage va vraiment changer si tu t\'y tiens."'}
                      {habit.pillar === 9 && '"Tu vas grave voir des résultats."'}
                      {habit.pillar === 13 && '"La lenteur, c\'est du self-care." ✨'}
                      {![1, 2, 3, 5, 6, 9, 13].includes(habit.pillar) && '"Continue, tu es sur la bonne voie ! 💛"'}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
