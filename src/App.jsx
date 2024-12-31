import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import UpdateTitle from "./components/common/UpdateTitle";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpdateTitle title="Online Library" />
              <Home />
            </>
          }
        />
        <Route
          path="livros"
          element={
            <>
              <UpdateTitle title="Livros" />
              <Books />
            </>
          }
        />
        <Route
          path="autores"
          element={
            <>
              <UpdateTitle title="Autores" />
              <Authors />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
