import * as React from 'react'

type ThemeSourceType = 'dark' | 'light' | 'system'
type ThemeValueType = 'dark' | 'light'
type DefaultThemeType = 'light' | 'system'

const isServer = typeof window === 'undefined'

const switchToLight = () => document.documentElement.classList.remove('dark')
const switchToDark = () => document.documentElement.classList.add('dark')

interface ThemeContextType {
  defaultTheme: ThemeSourceType
  setDark: () => void
  setLight: () => void
  storageKey: string
}

interface ThemeProviderProps extends Partial<ThemeContextType> {
  children: React.ReactNode
}

const defaultThemeScheme: ThemeContextType = {
  defaultTheme: 'system',
  setDark: switchToDark,
  setLight: switchToLight,
  storageKey: 'theme'
}

const ThemeContext = React.createContext(defaultThemeScheme)

const MEDIA_PREFERS_COLOR_SCHEME = '(prefers-color-scheme: dark)'

const getSystemTheme = (): ThemeValueType => {
  const systemTheme = window.matchMedia(MEDIA_PREFERS_COLOR_SCHEME).matches
    ? 'dark'
    : 'light'

  return systemTheme
}

function getDefaultTheme(
  key: string,
  fallback?: ThemeSourceType
): ThemeSourceType | undefined {
  if (isServer) return undefined
  try {
    const local = localStorage.getItem(key)
    if (local) return local as DefaultThemeType
  } catch (_) {
    return undefined
  }
  return fallback
}

function listenMediaQuery(callback: (e: MediaQueryListEvent) => void) {
  window
    .matchMedia(MEDIA_PREFERS_COLOR_SCHEME)
    .addEventListener('change', callback)

  return () =>
    window
      .matchMedia(MEDIA_PREFERS_COLOR_SCHEME)
      .removeEventListener('change', callback)
}

function ThemeProvider({
  children,
  defaultTheme = defaultThemeScheme.defaultTheme,
  storageKey = defaultThemeScheme.storageKey
}: ThemeProviderProps) {
  const [themeState, setThemeState] = React.useState(
    getDefaultTheme(storageKey, defaultTheme)
  )

  const applyTheme = React.useCallback((theme: ThemeValueType) => {
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
  }, [])

  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) applyTheme('dark')
      else applyTheme('light')
    },
    [applyTheme]
  )

  React.useEffect(() => {
    let theme = themeState
    if (!theme) theme = defaultTheme
    if (theme === 'system') theme = getSystemTheme()

    setThemeState(theme)
    applyTheme(theme)
  }, [themeState])

  React.useEffect(() => {
    const remove = listenMediaQuery(handleMediaQuery)
    return remove
  }, [handleMediaQuery])

  return (
    <ThemeContext.Provider
      value={{
        defaultTheme,
        setDark: () => applyTheme('dark'),
        setLight: () => applyTheme('light'),
        storageKey
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const { defaultTheme, setDark, setLight } = React.useContext(ThemeContext)
  const [theme, setThemeState] = React.useState(defaultTheme)

  const setTheme = React.useCallback((newTheme: ThemeValueType) => {
    if (newTheme === 'dark') setDark()
    else setLight()
    setThemeState(newTheme)
  }, [])

  React.useEffect(() => {
    const unsubscribe = listenMediaQuery(e => {
      if (e.matches) setTheme('dark')
      else setTheme('light')

      return unsubscribe
    })
  })

  return { setTheme, theme }
}

export { ThemeProvider, useTheme }
