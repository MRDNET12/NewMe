'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const ButterflyMascot = () => (
  <div className="relative">
    <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse">
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
    <div className="absolute -bottom-2 -right-2 text-2xl">✨</div>
  </div>
)

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleNext = () => {
    if (step === 1) {
      setStep(2)
    } else {
      onComplete()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-8xl mb-4 animate-bounce">✨</div>
          <h1 className="text-4xl font-bold text-pink-900 mb-2">New Me</h1>
        </div>

        <Card className="bg-white/80 backdrop-blur shadow-xl">
          <div className="p-8 space-y-6">
            <div className="text-center flex justify-center">
              <div className="mb-6">
                <ButterflyMascot />
              </div>
              
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <h2 className="text-2xl font-bold text-purple-900">
                    Bonjour !
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Moi c'est <span className="font-bold text-pink-600">"Glowee"</span>,<br />
                    ta meilleure amie glow up.
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <h2 className="text-2xl font-bold text-purple-900">
                    Prête à briller ?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Je suis là pour t'aider à briller<br />
                    jour après jour pour révéler ton glow.
                  </p>
                  <div className="pt-4 text-sm text-purple-600">
                    En 30 jours, tu ne changes pas qui tu es.<br />
                    Tu redeviens qui tu étais censée être.
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 justify-center pt-4">
              <div className={`w-3 h-3 rounded-full transition-all ${step === 1 ? 'bg-pink-500 scale-125' : 'bg-gray-300'}`} />
              <div className={`w-3 h-3 rounded-full transition-all ${step === 2 ? 'bg-pink-500 scale-125' : 'bg-gray-300'}`} />
            </div>

            <Button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold text-lg py-6"
            >
              {step === 1 ? 'Bonjour !' : "C'est parti !"}
            </Button>
          </div>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500">
          💛 New Me par Glowee
        </div>
      </div>
    </div>
  )
}
