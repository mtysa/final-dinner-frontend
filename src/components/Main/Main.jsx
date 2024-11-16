import "./Main.css";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import IdeasSection from "../IdeasSection/IdeasSection";
import SearchResults from "../SearchResults/SearchResults";

function Main() {
  return (
    <main>
      <SearchForm />
      <SearchResults />
      <IdeasSection />
      <About />
    </main>
  );
}

export default Main;
