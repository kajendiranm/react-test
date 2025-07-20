import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";

import Home from "./components/Home";
import News from "./components/News";
import Contact from "./components/Contact";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/news',
        element: <News />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
      
}

export default App
