import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos.js';
import Experiencia from './pages/Experiencia';
import Contactame from "./pages/Contactame.js";

function App() {
  return (
    <Router basename="/portafolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/experiencias" element={<Experiencia />} />
        <Route path="/contactame" element={<Contactame />} />
      </Routes>
    </Router>
  );
}

export default App;
