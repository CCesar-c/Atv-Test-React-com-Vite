import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/UserContext.jsx'
import './css/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Rotas />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
