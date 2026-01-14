'use client'

import { useState } from 'react'
import { DailyChecklist } from '@/components/daily-checklist'
import { ProgressTracker } from '@/components/progress-tracker'
import { MoodJournal } from '@/components/mood-journal'
import { GloweeBadges } from '@/components/glowee-badges'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sparkles, TrendingUp, Heart, Trophy } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('daily')

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">✨</div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">New Me</h1>
              <p className="text-sm text-pink-100">Ton voyage vers la meilleure version de toi-même</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <span className="text-2xl">🦋</span>
            <span className="text-sm font-medium">Glowee t'accompagne 💛</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto bg-white/80 backdrop-blur">
            <TabsTrigger value="daily" className="flex flex-col gap-1 p-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs">Aujourd'hui</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex flex-col gap-1 p-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs">Progression</span>
            </TabsTrigger>
            <TabsTrigger value="mood" className="flex flex-col gap-1 p-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              <Heart className="w-5 h-5" />
              <span className="text-xs">Journal</span>
            </TabsTrigger>
            <TabsTrigger value="badges" className="flex flex-col gap-1 p-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
              <Trophy className="w-5 h-5" />
              <span className="text-xs">Badges</span>
            </TabsTrigger>
          </TabsList>

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

      <footer className="mt-16 py-8 text-center text-gray-500 text-sm">
        <p>
          New Me - En 30 jours, tu ne changes pas qui tu es. Tu redeviens qui tu étais censée être. 🦋
        </p>
        <p className="mt-2">✨ Glowee t'accompagne dans ta transformation ✨</p>
      </footer>
    </div>
  )
}
