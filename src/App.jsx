// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
