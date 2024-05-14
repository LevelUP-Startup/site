import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AppRouter } from './Routers'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'
import { AuthProvider } from './context/auth'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | LevelUp" />
      <Toaster richColors position="top-right" />
      <ThemeProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
        <GlobalStyles />
        <GlobalStyles />
      </ThemeProvider>
    </HelmetProvider>
  )
}
