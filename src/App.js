import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Covid from "./components/covid/Covid";
import Sources from "./components/sources/Sources";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Covid />
      <Sources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
