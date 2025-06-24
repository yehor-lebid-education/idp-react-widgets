import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WidgetContextProvider } from './context/widget-context/WidgetContextProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ModeContextProvider } from './context/mode-context/ModeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <WidgetContextProvider>
                <ModeContextProvider>
                    <App />
                </ModeContextProvider>
            </WidgetContextProvider>
        </BrowserRouter>
    </StrictMode>,
)
