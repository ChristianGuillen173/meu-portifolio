// src/components/Habilidades.jsx

const habilidades = [
  { nome: "HTML", nivel: 85, cor: "bg-orange-500" },
  { nome: "CSS", nivel: 80, cor: "bg-blue-500" },
  { nome: "JavaScript", nivel: 60, cor: "bg-yellow-400" },
  { nome: "React", nivel: 40, cor: "bg-cyan-400" },
  { nome: "SQL", nivel: 55, cor: "bg-green-500" },
];

function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>

        <div className="flex flex-col gap-6">
          {habilidades.map((h) => (
            <div key={h.nome}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{h.nome}</span>
                <span className="text-gray-400 text-sm">{h.nivel}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className={`${h.cor} h-3 rounded-full`}
                  style={{ width: `${h.nivel}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
