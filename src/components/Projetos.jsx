// src/components/Projetos.jsx

const projetos = [
  {
    titulo: "Site para Restaurante",
    descricao:
      "Landing page moderna para restaurante local com cardápio, localização e formulário de reserva.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://site-restaurante-seven-taupe.vercel.app/",
    emoji: "🍕",
  },
  {
    titulo: "Eletrolink Manutenções",
    descricao:
      "Site institucional completo para empresa de manutenção elétrica com sistema de orçamentos e painel administrativo.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://www.eletrolinkmanutencoes.com",
    emoji: "⚡",
  },
  {
    titulo: "Dashboard com SQL",
    descricao:
      "Painel administrativo com cadastro de clientes e relatórios gerados a partir de banco de dados.",
    tags: ["React", "SQL", "Node.js"],
    link: "#",
    emoji: "📊",
  },
];

function Projetos() {
  return (
    <section id="projetos" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Projetos</h2>
        <p className="text-gray-400 text-center mb-12">
          Alguns projetos que desenvolvi para o meu portfólio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <div
              key={p.titulo}
              className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:ring-2 hover:ring-blue-500 transition-all"
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="text-xl font-semibold">{p.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {p.descricao}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
