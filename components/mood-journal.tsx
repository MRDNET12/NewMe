'use client'

import { useState, useEffect } from 'react'
import { loadProgress, saveProgress, getTodayDate } from '@/lib/storage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Heart, Smile, Meh, Frown } from 'lucide-react'

export function MoodJournal() {
  const [mood, setMood] = useState(5)
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const today = getTodayDate()
    const progress = loadProgress()
    const todayData = progress[today]
    if (todayData) {
      setMood(todayData.mood || 5)
      setNote(todayData.note || '')
      setSaved(true)
    }
  }, [])

  const handleSave = () => {
    const today = getTodayDate()
    const progress = loadProgress()
    if (!progress[today]) {
      progress[today] = { completedHabits: [], mood: 5, note: '' }
    }
    progress[today].mood = mood
    progress[today].note = note
    saveProgress(progress)
    setSaved(true)
  }

  const moods = [
    { value: 1, icon: Frown, label: 'Fatiguée', color: 'text-red-500' },
    { value: 2, icon: Frown, label: 'Pas top', color: 'text-orange-500' },
    { value: 3, icon: Meh, label: 'Normal', color: 'text-yellow-500' },
    { value: 4, icon: Smile, label: 'Bien', color: 'text-lime-500' },
    { value: 5, icon: Heart, label: 'Glowing !', color: 'text-pink-500' }
  ]

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-900">
          <Heart className="w-6 h-6 text-pink-500" />
          Comment je me sens aujourd'hui ?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          {moods.map((m) => (
            <button
              key={m.value}
              onClick={() => setMood(m.value)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                mood === m.value ? 'bg-white shadow-md scale-110' : 'hover:bg-white/50'
              }`}
            >
              <m.icon className={`w-8 h-8 ${m.color}`} />
              <span className="text-xs font-medium">{m.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-pink-700">
            Une note pour toi ?
          </label>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Comment s'est passée ta journée ? Qu'est-ce que tu as ressenti ?"
            className="min-h-32 resize-none"
          />
        </div>

        <Button 
          onClick={handleSave}
          className="w-full bg-pink-500 hover:bg-pink-600"
        >
          {saved ? '✓ Enregistré' : 'Enregistrer mes ressentis'}
        </Button>
      </CardContent>
    </Card>
  )
}
