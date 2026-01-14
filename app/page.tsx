'use client'

import { useState, useEffect } from 'react'
import { DailyChecklist } from '@/components/daily-checklist'
import { ProgressTracker } from '@/components/progress-tracker'
import { MoodJournal } from '@/components/mood-journal'
import { GloweeBadges } from '@/components/glowee-badges'
import { Onboarding } from '@/components/onboarding'
import { BottomNavigation } from '@/components/bottom-navigation'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { hasSeenOnboarding, markOnboardingSeen } from '@/lib/storage'

const ButterflyMascot = () => (
  <div className="relative">
    <svg width="60" height="60" viewBox="0 0 120 120" className="animate-pulse">
      <defs>
        <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="wingGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="translate(60, 60)">
        <ellipse cx="0" cy="0" rx="8" ry="10" fill="#8b5cf6" />
        <path d="M 0 -8 Q -30 -40 -50 -20 Q -40 0 -10 0 Z" fill="url(#wingGrad1)" className="animate-bounce" style={{ animationDelay: '0s' }} />
        <path d="M 0 8 Q -30 40 -50 20 Q -40 0 -10 0 Z" fill="url(#wingGrad2)" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
        <path d="M 0 -8 Q 30 -40 50 -20 Q 40 0 10 0 Z" fill="url(#wingGrad1)" className="animate-bounce" style={{ animationDelay: '0.05s' }} />
        <path d="M 0 8 Q 30 40 50 20 Q 40 0 10 0 Z" fill="url(#wingGrad2)" className="animate-bounce" style={{ animationDelay: '0.15s' }} />
        <circle cx="-2" cy="-3" r="2" fill="#1f2937" />
        <circle cx="2" cy="-3" r="2" fill="#1f2937" />
        <path d="M -3 2 Q 0 4 3 2" stroke="#1f2937" strokeWidth="1" fill="none" />
      </g>
    </svg>
  </div>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState('daily')
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!hasSeenOnboarding()) {
      setShowOnboarding(true)
    }
  }, [])

  const handleOnboardingComplete = () => {
    markOnboardingSeen()
    setShowOnboarding(false)
  }

  if (!mounted) return null

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pb-20">
      <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-center">New Me</h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm md:text-base">
              <ButterflyMascot />
              <p className="text-pink-100 font-medium">
                Avançons vers la meilleure version de toi-même
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsContent value="daily" className="space-y-6">
            <DailyChecklist />
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <ProgressTracker />
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <MoodJournal />
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <GloweeBadges />
          </TabsContent>
        </Tabs>
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

