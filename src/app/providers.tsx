'use client'

import { ThemeProvider } from 'next-themes'

import { preferences } from '@/stores/preferences'

const Providers = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  const { language, setLang } = preferences

  // * set language depending on locale
  const navigatorLocale = window.navigator.language.substring(0, 2)
  if ((navigatorLocale === 'ru' || navigatorLocale === 'en') && navigatorLocale !== language) {
    setLang(navigatorLocale)
  }

  return <ThemeProvider>{children}</ThemeProvider>
}

export { Providers }
