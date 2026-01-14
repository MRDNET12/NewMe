import { Habit } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronRight, Sparkles } from 'lucide-react'

const ButterflyMascot = () => (
  <div className="relative">
    <svg width="80" height="80" viewBox="0 0 120 120" className="animate-pulse">
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

interface HabitCardProps {
  habit: Habit
  completed: boolean
  onToggle: () => void
}

export function HabitCard({ habit, completed, onToggle }: HabitCardProps) {
  return (
    <Card 
      className={`transition-all cursor-pointer ${completed ? 'border-green-300 bg-green-50/50 hover:shadow-md' : 'hover:shadow-md'}`}
      onClick={onToggle}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="mt-1" onClick={(e) => e.stopPropagation()}>
            <Checkbox
              checked={completed}
              onCheckedChange={onToggle}
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <span>{habit.emoji}</span>
              <span>{habit.title}</span>
            </CardTitle>
            <div className="mt-2 flex items-start gap-2 text-sm text-purple-600">
              <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-500" />
              <p className="italic">"{habit.gloweeMessage}"</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <ChevronRight className="w-5 h-5 text-purple-500" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
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
              <div className="mt-6 space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Explication
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {habit.explanation}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Ce que tu vas remarquer
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {habit.results}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                  <div className="flex items-start gap-4">
                    <ButterflyMascot />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Glowee
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg italic">
                        "{habit.gloweeMessage}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
    </Card>
  )
}
