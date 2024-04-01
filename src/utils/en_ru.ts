import { preferences } from '@/stores/preferences'
import type { TDictionary } from '@/constants/types'

/* eslint-disable */
const dict: TDictionary = {
  'Profile': 'Профиль',
  'Settings': 'Настройки',
  'Knowledgebases': 'Базы знаний'
}

function t (word: string): string {
  if (preferences.language === 'ru') return dict[word]
  return word
}

export { t }