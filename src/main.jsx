import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home';
import Catalogs from './Home/Catalogs/Catalogs';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DefaultCatalogs from './Home/DefaultCatalogs/DefaultCatalogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <DefaultCatalogs></DefaultCatalogs>
      },
      {
        path: "/category/:category",
        element: <Catalogs></Catalogs>
      }
    ]
  }
]);
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
