'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sparkles, TrendingUp, Heart, Trophy } from 'lucide-react'

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-purple-200 shadow-lg z-50">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-auto bg-transparent border-0">
          <TabsTrigger 
            value="daily" 
            className="flex flex-col gap-1 p-3 data-[state=active]:bg-pink-50 data-[state=active]:text-pink-600 border-0"
          >
            <Sparkles className={`w-6 h-6 ${activeTab === 'daily' ? 'text-pink-600' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeTab === 'daily' ? 'text-pink-600 font-semibold' : 'text-gray-400'}`}>
              Aujourd'hui
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="progress" 
            className="flex flex-col gap-1 p-3 data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600 border-0"
          >
            <TrendingUp className={`w-6 h-6 ${activeTab === 'progress' ? 'text-purple-600' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeTab === 'progress' ? 'text-purple-600 font-semibold' : 'text-gray-400'}`}>
              Progression
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="mood" 
            className="flex flex-col gap-1 p-3 data-[state=active]:bg-pink-50 data-[state=active]:text-pink-600 border-0"
          >
            <Heart className={`w-6 h-6 ${activeTab === 'mood' ? 'text-pink-600' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeTab === 'mood' ? 'text-pink-600 font-semibold' : 'text-gray-400'}`}>
              Journal
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="badges" 
            className="flex flex-col gap-1 p-3 data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-600 border-0"
          >
            <Trophy className={`w-6 h-6 ${activeTab === 'badges' ? 'text-yellow-600' : 'text-gray-400'}`} />
            <span className={`text-xs ${activeTab === 'badges' ? 'text-yellow-600 font-semibold' : 'text-gray-400'}`}>
              Badges
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
