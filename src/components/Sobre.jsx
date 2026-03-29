// src/components/Sobre.jsx

function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center text-5xl shrink-0">
          👨‍💻
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Sou estudante de Ciências da Computação no 5º semestre, apaixonado
            por transformar ideias em produtos digitais reais. Tenho experiência
            com HTML, CSS, JavaScript e banco de dados SQL.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Atualmente estou disponível para projetos freelance — especialmente
            sites para pequenos negócios que querem marcar presença na internet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
