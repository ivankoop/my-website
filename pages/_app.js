import '../styles/global.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ThemeToggle />
    </ThemeProvider>
  )
}
