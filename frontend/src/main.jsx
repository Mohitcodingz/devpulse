// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router'
// import './index.css'
// import App, {
//   AboutPage,
//   ComparePage,
//   HomePage,
//   NotFoundPage,
// } from './App.jsx'

// const pages = [
//   { index: true, element: <HomePage /> },
//   { path: 'compare', element: <ComparePage /> },
//   { path: 'about', element: <AboutPage /> },
// ]

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: pages,
//   },
//   { path: '*', element: <NotFoundPage /> },
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
// import { BrowserRouter, RouterProvider } from 'react-router'

  // const router = [
    
  // ]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,

)

