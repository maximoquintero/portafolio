import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos.js'
import Expeciencia from './pages/Experiencia'
import Contactame from "./pages/Contactame.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sobre-mi",
      element: <SobreMi />,
    },
    {
      path: "/proyectos",
      element: <Proyectos />,
    },
    {
      path: "/experiencias",
      element: <Expeciencia />,
    },
    {
      path: "/contactame",
      element: <Contactame />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
