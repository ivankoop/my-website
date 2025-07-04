import '../styles/global.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'
import MobileNavigation from '../components/mobile-navigation/mobile-navigation'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ThemeToggle />
      <MobileNavigation />
    </ThemeProvider>
  )
}
