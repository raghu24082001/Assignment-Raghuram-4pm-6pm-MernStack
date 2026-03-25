import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import ButtonProvider from './provider/ButtonProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ButtonProvider>
  </StrictMode>,
)
