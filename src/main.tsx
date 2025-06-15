import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WidgetContextProvider } from './context/widget-context/WidgetContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <WidgetContextProvider>
                <App />
            </WidgetContextProvider>
        </BrowserRouter>
    </StrictMode>,
)
