import { makeAutoObservable } from 'mobx'

import type { TLanguage } from '@/constants/types'

class UserPreferences {
  language: TLanguage = 'ru'

  constructor () {
    makeAutoObservable(this)
  }

  setLang = (lang: TLanguage): void => {
    this.language = lang
  }
}

const preferences = new UserPreferences()

export { preferences }
