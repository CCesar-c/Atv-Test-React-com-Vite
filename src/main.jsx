import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </StrictMode>,
)
