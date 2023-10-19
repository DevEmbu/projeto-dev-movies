import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Rotas from './routes/routes.jsx'
import GlobalStyle from './styles/globalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
       <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
)
