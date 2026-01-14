export interface Habit {
  id: string
  title: string
  emoji: string
  explanation: string
  results: string
  gloweeMessage: string
  category: 'physical' | 'mental' | 'emotional'
  pillar: number
}

export interface DailyProgress {
  date: string
  completedHabits: string[]
  mood: number
  note: string
}

export interface Badge {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt?: string
}

export const HABITS: Habit[] = [
  {
    id: 'walk',
    title: 'Marcher 30 min',
    emoji: '🚶‍♀️',
    explanation: "L'objectif n'est pas de faire un sport compliqué, mais simplement de bouger plus au quotidien. Si tu avais l'habitude de prendre la voiture ou le bus pour de petits trajets, l'idée est de les remplacer par la marche.\n\nMarcher le plus possible dans la journée va naturellement transformer ton corps. Sans régime, sans salle de sport, sans pression.",
    results: "Ton corps s'affine progressivement\n\nTu perds du poids sans t'en rendre compte\n\nTes jambes deviennent plus légères\n\nTu te sens mieux mentalement",
    gloweeMessage: "Marche. Vraiment. Tu verras grave la différence.",
    category: 'physical',
    pillar: 1
  },
  {
    id: 'glutamine',
    title: 'Glutamine le matin',
    emoji: '🌿',
    explanation: "Si tu as des problèmes de digestion, de ballonnements ou un ventre souvent gonflé, la glutamine est présentée comme le meilleur complément.\n\nLe fait de la prendre le matin à jeun aide ton système digestif à se réparer et à fonctionner plus calmement.",
    results: "Un ventre qui s'aplatit visiblement\n\nBeaucoup moins de ballonnements\n\nUne sensation de ventre plus léger dès le matin",
    gloweeMessage: "Tu vas voir ton ventre changer.",
    category: 'physical',
    pillar: 2
  },
  {
    id: 'reading',
    title: 'Lecture (5-10 min)',
    emoji: '📖',
    explanation: "Il ne s'agit pas de lire pendant des heures. Quelques pages par jour suffisent. En un mois, ton livre sera terminé.\n\nCe temps quotidien te permet d'apprendre sur toi-même et de te sentir beaucoup mieux intérieurement.",
    results: "Tu comprends mieux tes émotions\n\nTu prends confiance\n\nTu évolues mentalement",
    gloweeMessage: "Le but, c'est de glow de l'extérieur, mais aussi de l'intérieur.",
    category: 'mental',
    pillar: 3
  },
  {
    id: 'water',
    title: 'Eau (2L)',
    emoji: '💧',
    explanation: "Même si tu n'as pas l'habitude, dès que tu commences à boire plus d'eau, les effets sont visibles rapidement.\n\nL'eau agit directement sur : La peau, Les cheveux, La digestion, L'énergie générale",
    results: "Une peau plus belle\n\nDes cheveux plus brillants\n\nUne meilleure digestion\n\nUn corps qui fonctionne mieux",
    gloweeMessage: "L'hydratation est la clé de ta beauté !",
    category: 'physical',
    pillar: 4
  },
  {
    id: 'dryBrushing',
    title: 'Brossage à sec',
    emoji: '🧴',
    explanation: "Le brossage à sec, fait tous les jours avant la douche, stimule la circulation et la peau.\n\nEn un mois, et encore plus avant l'été, les résultats deviennent visibles.",
    results: "Cellulite atténuée\n\nPeau plus douce\n\nPeau plus lisse\n\nPeau plus lumineuse",
    gloweeMessage: "Tu verras grave la différence.",
    category: 'physical',
    pillar: 5
  },
  {
    id: 'faceMassage',
    title: 'Massage du visage',
    emoji: '💆‍♀️',
    explanation: "Que ce soit avec tes mains ou avec un gua sha, le massage quotidien du visage change réellement les traits.\n\nMême quelques minutes par jour suffisent, à condition d'être régulière.",
    results: "Visage qui dégonfle\n\nTraits plus définis\n\nVisage transformé en un mois",
    gloweeMessage: "Ton visage va vraiment changer si tu t'y tiens.",
    category: 'physical',
    pillar: 6
  },
  {
    id: 'sport',
    title: 'Sport / Mouvement',
    emoji: '🏃‍♀️',
    explanation: "Le plus important n'est pas le sport en lui-même, mais le plaisir. Pilates chez toi, course, salle de sport… tout est valable.\n\nEn pratiquant 2 à 3 fois par semaine, les résultats arrivent vite.",
    results: "Corps plus ferme\n\nSensation de bien-être\n\nMotivation pour l'été",
    gloweeMessage: "Trouve ce que tu aimes et le mouvement deviendra un plaisir !",
    category: 'physical',
    pillar: 7
  },
  {
    id: 'protein',
    title: 'Protéines à chaque repas',
    emoji: '🍳',
    explanation: "Petit-déjeuner, déjeuner ou dîner : les protéines doivent être présentes à chaque repas.\n\nAssociées au sport, elles transforment visiblement le corps.",
    results: "Les muscles en ont besoin\n\nLe corps se raffermit\n\nMeilleure récupération",
    gloweeMessage: "Les protéines sont les briques de ton corps !",
    category: 'physical',
    pillar: 8
  },
  {
    id: 'skincare',
    title: 'Skincare matin & soir',
    emoji: '🧼',
    explanation: "La clé n'est pas la perfection, mais la régularité. Matin et soir, pendant un mois.",
    results: "Peau plus belle\n\nPeau plus nette\n\nConfiance en soi renforcée",
    gloweeMessage: "Tu vas grave voir des résultats.",
    category: 'physical',
    pillar: 9
  },
  {
    id: 'serum',
    title: 'Sérum cils',
    emoji: '👁️',
    explanation: "Un geste simple, mais un vrai game changer.\n\nAvec le temps, les cils deviennent naturellement longs, même sans mascara.",
    results: "Regard intense sans maquillage\n\nParfait avec un rehaussement de cils\n\nDifférence visible",
    gloweeMessage: "Des cils de rêve, naturellement !",
    category: 'physical',
    pillar: 10
  },
  {
    id: 'protectiveHair',
    title: 'Coiffures protectrices',
    emoji: '🌙',
    explanation: "Protéger ses cheveux avant de dormir permet d'éviter la casse.",
    results: "Cheveux plus longs\n\nCheveux plus doux\n\nCheveux plus brillants",
    gloweeMessage: "Protège tes cheveux la nuit, ils te remercieront !",
    category: 'physical',
    pillar: 11
  },
  {
    id: 'moisturizer',
    title: 'Crème après douche',
    emoji: '🧴',
    explanation: "Juste après la douche, la peau absorbe mieux l'hydratation.\n\nAvant l'été, cela change tout.",
    results: "Peau plus uniforme\n\nPeau plus lumineuse\n\nSensation de peau saine",
    gloweeMessage: "Une peau hydratée est une peau qui rayonne !",
    category: 'physical',
    pillar: 12
  },
  {
    id: 'earlyWake',
    title: 'Se lever un peu plus tôt',
    emoji: '⏰',
    explanation: "Se lever un peu plus tôt permet de faire les choses lentement, sans stress.\n\nCourir le matin augmente le cortisol, ce qui provoque : Visage plus gonflé, Corps plus tendu",
    results: "Visage plus détendu\n\nCorps plus apaisé\n\nJournées plus équilibrées",
    gloweeMessage: "La lenteur, c'est du self-care. ✨",
    category: 'mental',
    pillar: 13
  }
]

export const BADGES: Badge[] = [
  {
    id: 'first-day',
    title: 'Premier jour',
    description: 'Tu as commencé ton voyage New Me !',
    icon: '🌱'
  },
  {
    id: 'week-1',
    title: 'Première semaine',
    description: '7 jours de transformation !',
    icon: '🌿'
  },
  {
    id: 'perfect-day',
    title: 'Journée parfaite',
    description: 'Toutes les habitudes complétées en un jour !',
    icon: '✨'
  },
  {
    id: 'water-master',
    title: 'Maîtresse de l\'eau',
    description: '7 jours d\'eau à 2L complétés',
    icon: '💧'
  },
  {
    id: 'walking-star',
    title: 'Star de la marche',
    description: '7 jours de marche 30 min complétés',
    icon: '🚶‍♀️'
  },
  {
    id: 'skincare-queen',
    title: 'Reine du skincare',
    description: '7 jours de skincare complétés',
    icon: '👑'
  },
  {
    id: 'week-2',
    title: 'Deux semaines',
    description: '14 jours de transformation !',
    icon: '🌸'
  },
  {
    id: 'month-complete',
    title: 'Transformation complète',
    description: '30 jours terminés ! Tu as brillé !',
    icon: '🦋'
  }
]
