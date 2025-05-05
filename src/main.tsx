import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WidgetContextProvider } from './context/widget-context/WidgetContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WidgetContextProvider>
            <App />
        </WidgetContextProvider>
    </StrictMode>,
)
