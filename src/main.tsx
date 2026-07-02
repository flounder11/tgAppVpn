import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initTelegramApp } from './lib/telegram'

initTelegramApp()

createRoot(document.getElementById('root')!).render(<App />)
