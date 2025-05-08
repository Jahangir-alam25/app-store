import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import Loading from './Pages/Loading.jsx'

createRoot(document.getElementById('root')).render(
 
    <HelmetProvider>
      <AuthProvider>

        <Suspense fallback={<Loading></Loading>}>
        <RouterProvider router={router} ></RouterProvider>
        </Suspense>
        <ToastContainer></ToastContainer>

      </AuthProvider>
    </HelmetProvider>

)
