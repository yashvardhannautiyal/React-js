import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterContextProvider } from './Context/CounterContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>    
       <App />
    </CounterContextProvider>

  </StrictMode>,
)
