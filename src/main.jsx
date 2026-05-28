import { createRoot } from 'react-dom/client'
import Rotas from './routes/Rotas.jsx'
import { TemaProvider, UserProvider } from './Context/Contextos.jsx'


createRoot(document.getElementById('root')).render(
  
    <TemaProvider>
      <UserProvider>
        <Rotas />
      </UserProvider>
    </TemaProvider>
  

)
