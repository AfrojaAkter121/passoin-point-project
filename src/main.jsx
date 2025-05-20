import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <ToastContainer  />
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
