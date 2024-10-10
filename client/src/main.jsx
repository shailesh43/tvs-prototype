// !important imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Homepage from './pages/Homepage'
import Gallerypage from './pages/Gallerypage'
import Demopage from './pages/Demopage'
import NotFoundPage from './pages/NotFoundPage'
import AltGalleryPage from './pages/AltGalleryPage'


const router = createBrowserRouter([
  {path: '/', element: <Homepage />, errorElement: <NotFoundPage />}, 
  {path: '/gallery', element: <AltGalleryPage />}, 
  {path: '/demo', element: <Demopage />}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
