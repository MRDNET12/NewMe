'use client'

import { useState, useEffect } from 'react'
import { BADGES } from '@/types'
import { loadBadges, saveBadges, loadProgress } from '@/lib/storage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge as UIBadge } from '@/components/ui/badge'
import { Sparkles, Award } from 'lucide-react'

export function GloweeBadges() {
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const badges = loadBadges()
    setUnlockedBadges(badges)
    checkAndUnlockBadges(badges)
  }, [])

  const checkAndUnlockBadges = (currentBadges: string[]) => {
    const progress = loadProgress()
    const entries = Object.entries(progress).filter(([key]) => key !== 'firstDate')
    
    const newBadges = [...currentBadges]
    let changed = false

    if (entries.length >= 1 && !newBadges.includes('first-day')) {
      newBadges.push('first-day')
      changed = true
    }

    if (entries.length >= 7 && !newBadges.includes('week-1')) {
      newBadges.push('week-1')
      changed = true
    }

    if (entries.length >= 14 && !newBadges.includes('week-2')) {
      newBadges.push('week-2')
      changed = true
    }

    const perfectDays = entries.filter(([, data]) => data.completedHabits?.length === 13).length
    if (perfectDays >= 1 && !newBadges.includes('perfect-day')) {
      newBadges.push('perfect-day')
      changed = true
    }

    const waterDays = entries.filter(([, data]) => data.completedHabits?.includes('water')).length
    if (waterDays >= 7 && !newBadges.includes('water-master')) {
      newBadges.push('water-master')
      changed = true
    }

    const walkDays = entries.filter(([, data]) => data.completedHabits?.includes('walk')).length
    if (walkDays >= 7 && !newBadges.includes('walking-star')) {
      newBadges.push('walking-star')
      changed = true
    }

    const skincareDays = entries.filter(([, data]) => data.completedHabits?.includes('skincare')).length
    if (skincareDays >= 7 && !newBadges.includes('skincare-queen')) {
      newBadges.push('skincare-queen')
      changed = true
    }

    if (entries.length >= 30 && !newBadges.includes('month-complete')) {
      newBadges.push('month-complete')
      changed = true
    }

    if (changed) {
      setUnlockedBadges(newBadges)
      saveBadges(newBadges)
      const newlyUnlocked = newBadges.filter(b => !currentBadges.includes(b))
      if (newlyUnlocked.length > 0) {
        const lastBadge = BADGES.find(b => b.id === newlyUnlocked[newlyUnlocked.length - 1])
        if (lastBadge) {
          setMessage(`Nouveau badge débloqué : ${lastBadge.icon} ${lastBadge.title} !`)
          setTimeout(() => setMessage(''), 5000)
        }
      }
    }
  }

  const gloweeMessages = [
    'Tu es incroyable ! Continue comme ça 💛',
    'Chaque petit pas compte ✨',
    'Tu brillances de l\'intérieur 🌟',
    'La lenteur, c\'est du self-care 💜',
    'En 30 jours, tu redeviens qui tu étais censée être 🦋',
    'Tu vas grave voir la différence ! 💫',
    'New Me n\'est pas une contrainte, c\'est un rituel d\'amour 🌸'
  ]

  const randomMessage = gloweeMessages[Math.floor(Math.random() * gloweeMessages.length)]

  return (
    <div className="space-y-4">
      {message && (
        <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-300 animate-pulse">
          <CardContent className="pt-6">
            <p className="text-center font-medium text-pink-900">{message}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Tes Badges Glowee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BADGES.map((badge) => {
              const unlocked = unlockedBadges.includes(badge.id)
              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-lg text-center transition-all ${
                    unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className={`text-4xl mb-2 ${unlocked ? '' : 'grayscale'}`}>
                    {badge.icon}
                  </div>
                  <div className="font-semibold text-sm mb-1">{badge.title}</div>
                  <div className="text-xs text-gray-600">{badge.description}</div>
                  {unlocked && (
                    <UIBadge className="mt-2 bg-yellow-400 text-yellow-900">Débloqué</UIBadge>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">✨</div>
            <div>
              <div className="font-bold text-pink-900">Glowee dit :</div>
              <div className="text-pink-700">{randomMessage}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
