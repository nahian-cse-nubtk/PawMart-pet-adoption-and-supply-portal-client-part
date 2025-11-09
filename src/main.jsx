import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './ContextAndProvider/AuthContext.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
