import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lista from "./pages/Lista";
import Biografia from "./pages/Biografia";
import "./styles/navbar.css"; 


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Lista de Compras</Link>
        <Link to="/biografia">Quem sou eu</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/biografia" element={<Biografia />} />
      </Routes>
    </Router>
  );
}

export default App;