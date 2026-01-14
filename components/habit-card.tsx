import { Habit } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

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
              <div className="mt-6 prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {habit.description}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
    </Card>
  )
}
