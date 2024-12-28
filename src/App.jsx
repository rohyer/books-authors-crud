import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="livros" element={<Books />} />
        <Route path="autores" element={<Authors />} />
      </Routes>
    </Router>
  );
}

export default App;
