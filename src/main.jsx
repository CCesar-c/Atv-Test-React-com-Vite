import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TemaProvider, UserProvider } from './Context/Contextos.jsx'
import './css/App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TemaProvider>
      <UserProvider>
        <Rotas />
      </UserProvider>\
    </TemaProvider>
  </BrowserRouter>

)
