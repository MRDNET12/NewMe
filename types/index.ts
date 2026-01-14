export interface Habit {
  id: string
  title: string
  emoji: string
  description: string
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
    description: `L'objectif n'est pas de faire un sport compliqué, mais simplement de bouger plus au quotidien. Si tu avais l'habitude de prendre la voiture ou le bus pour de petits trajets, l'idée est de les remplacer par la marche.

Marcher le plus possible dans la journée va naturellement transformer ton corps. Sans régime, sans salle de sport, sans pression.

Ce que tu vas remarquer :

Ton corps s'affine progressivement

Tu perds du poids sans t'en rendre compte

Tes jambes deviennent plus légères

Tu te sens mieux mentalement

Glowee te rappelle chaque jour : « Marche. Vraiment. Tu verras grave la différence. »`,
    category: 'physical',
    pillar: 1
  },
  {
    id: 'glutamine',
    title: 'Glutamine le matin',
    emoji: '🌿',
    description: `Si tu as des problèmes de digestion, de ballonnements ou un ventre souvent gonflé, la glutamine est présentée comme le meilleur complément.

Le fait de la prendre le matin à jeun aide ton système digestif à se réparer et à fonctionner plus calmement.

Ce que tu vas remarquer :

Un ventre qui s'aplatit visiblement

Beaucoup moins de ballonnements

Une sensation de ventre plus léger dès le matin

Glowee précise : « Tu vas voir ton ventre changer. »`,
    category: 'physical',
    pillar: 2
  },
  {
    id: 'reading',
    title: 'Lecture (5-10 min)',
    emoji: '📖',
    description: `Il ne s'agit pas de lire pendant des heures. Quelques pages par jour suffisent. En un mois, ton livre sera terminé.

Ce temps quotidien te permet d'apprendre sur toi-même et de te sentir beaucoup mieux intérieurement.

Pourquoi c'est essentiel :

Tu comprends mieux tes émotions

Tu prends confiance

Tu évolues mentalement

Glowee insiste : « Le but, c'est de glow de l'extérieur, mais aussi de l'intérieur. »`,
    category: 'mental',
    pillar: 3
  },
  {
    id: 'water',
    title: 'Eau (2L)',
    emoji: '💧',
    description: `Même si tu n'as pas l'habitude, dès que tu commences à boire plus d'eau, les effets sont visibles rapidement.

L'eau agit directement sur : La peau, Les cheveux, La digestion, L'énergie générale

Ce que tu vas constater :

Une peau plus belle

Des cheveux plus brillants

Une meilleure digestion

Un corps qui fonctionne mieux`,
    category: 'physical',
    pillar: 4
  },
  {
    id: 'dryBrushing',
    title: 'Brossage à sec',
    emoji: '🧴',
    description: `Le brossage à sec, fait tous les jours avant la douche, stimule la circulation et la peau.

En un mois, et encore plus avant l'été, les résultats deviennent visibles.

Résultats attendus :

Cellulite atténuée

Peau plus douce

Peau plus lisse

Peau plus lumineuse

Glowee promet : « Tu verras grave la différence. »`,
    category: 'physical',
    pillar: 5
  },
  {
    id: 'faceMassage',
    title: 'Massage du visage',
    emoji: '💆‍♀️',
    description: `Que ce soit avec tes mains ou avec un gua sha, le massage quotidien du visage change réellement les traits.

Même quelques minutes par jour suffisent, à condition d'être régulière.

Ce que tu vas voir :

Visage qui dégonfle

Traits plus définis

Visage transformé en un mois

Glowee te motive : « Ton visage va vraiment changer si tu t'y tiens. »`,
    category: 'physical',
    pillar: 6
  },
  {
    id: 'sport',
    title: 'Sport / Mouvement',
    emoji: '🏃‍♀️',
    description: `Le plus important n'est pas le sport en lui-même, mais le plaisir. Pilates chez toi, course, salle de sport… tout est valable.

En pratiquant 2 à 3 fois par semaine, les résultats arrivent vite.

Bénéfices :

Corps plus ferme

Sensation de bien-être

Motivation pour l'été`,
    category: 'physical',
    pillar: 7
  },
  {
    id: 'protein',
    title: 'Protéines à chaque repas',
    emoji: '🍳',
    description: `Petit-déjeuner, déjeuner ou dîner : les protéines doivent être présentes à chaque repas.

Associées au sport, elles transforment visiblement le corps.

Pourquoi c'est important :

Les muscles en ont besoin

Le corps se raffermit

Meilleure récupération`,
    category: 'physical',
    pillar: 8
  },
  {
    id: 'skincare',
    title: 'Skincare matin & soir',
    emoji: '🧼',
    description: `La clé n'est pas la perfection, mais la régularité. Matin et soir, pendant un mois.

Résultats promis :

Peau plus belle

Peau plus nette

Confiance en soi renforcée

Glowee rassure : « Tu vas grave voir des résultats. »`,
    category: 'physical',
    pillar: 9
  },
  {
    id: 'serum',
    title: 'Sérum cils',
    emoji: '👁️',
    description: `Un geste simple, mais un vrai game changer.

Avec le temps, les cils deviennent naturellement longs, même sans mascara.

Idéal pour l'été :

Regard intense sans maquillage

Parfait avec un rehaussement de cils

Différence visible`,
    category: 'physical',
    pillar: 10
  },
  {
    id: 'protectiveHair',
    title: 'Coiffures protectrices',
    emoji: '🌙',
    description: `Protéger ses cheveux avant de dormir permet d'éviter la casse.

Résultats :

Cheveux plus longs

Cheveux plus doux

Cheveux plus brillants`,
    category: 'physical',
    pillar: 11
  },
  {
    id: 'moisturizer',
    title: 'Crème après douche',
    emoji: '🧴',
    description: `Juste après la douche, la peau absorbe mieux l'hydratation.

Avant l'été, cela change tout :

Peau plus uniforme

Peau plus lumineuse

Sensation de peau saine`,
    category: 'physical',
    pillar: 12
  },
  {
    id: 'earlyWake',
    title: 'Se lever un peu plus tôt',
    emoji: '⏰',
    description: `Se lever un peu plus tôt permet de faire les choses lentement, sans stress.

Courir le matin augmente le cortisol, ce qui provoque :

Visage plus gonflé

Corps plus tendu

Résultats :

Visage plus détendu

Corps plus apaisé

Journées plus équilibrées

Glowee conclut : « La lenteur, c'est du self-care. » ✨`,
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
