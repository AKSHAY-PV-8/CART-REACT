import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContetProvider } from './context/CartContest.jsx'

createRoot(document.getElementById('root')).render(
    <CartContetProvider>
      <App />
    </CartContetProvider>
)
