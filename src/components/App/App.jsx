import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedRecipes from "../SavedRecipes/SavedRecipes";
import Footer from "../Footer/Footer";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
