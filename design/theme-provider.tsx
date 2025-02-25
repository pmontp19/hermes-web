import type { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemeProvider
    attribute="class"
    defaultTheme="system"
    forcedTheme='light'
    enableSystem
    disableTransitionOnChange
    {...props}
  >
    {children}
  </NextThemeProvider>
)
