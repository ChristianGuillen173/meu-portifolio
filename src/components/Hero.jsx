// src/components/Hero.jsx

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white text-center px-4">
      <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase">
        Olá, eu sou o
      </p>

      <h1 className="text-5xl font-bold mb-4">Christian</h1>

      <h2 className="text-2xl text-gray-400 mb-6">
        Desenvolvedor Web & Freelancer
      </h2>

      <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
        Crio sites modernos e funcionais para pequenas empresas. Transformo
        ideias em produtos digitais reais.
      </p>

      <div className="flex gap-4">
        <a
          href="#projetos"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Ver Projetos
        </a>

        <a
          href="#contato"
          className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Fale Comigo
        </a>
      </div>
    </section>
  );
}

export default Hero;
