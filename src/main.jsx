import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './ContextAndProvider/AuthContext.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Router/Router.jsx'
import AuthProvider from './ContextAndProvider/AuthProvider.jsx'
import ThemeProvider from './ContextAndProvider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <ThemeProvider>
        <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      </ThemeProvider>

  </StrictMode>,
)
