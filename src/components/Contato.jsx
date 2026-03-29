// src/components/Contato.jsx
import { useState } from "react";

function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);

    const dados = new FormData(e.target);

    const resposta = await fetch("https://formspree.io/f/maqlepry", {
      method: "POST",
      body: dados,
      headers: { Accept: "application/json" },
    });

    if (resposta.ok) {
      setEnviado(true);
    }

    setEnviando(false);
  }

  return (
    <section id="contato" className="py-24 bg-gray-950 text-white px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
        <p className="text-gray-400 mb-10">
          Está precisando de um site? Me manda uma mensagem e eu respondo
          rápido!
        </p>

        {enviado ? (
          <div className="bg-green-800 text-green-200 px-6 py-8 rounded-xl text-lg font-medium">
            ✅ Mensagem enviada! Entrarei em contato em breve.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              name="mensagem"
              placeholder="Sua mensagem..."
              required
              className="bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
              type="submit"
              disabled={enviando}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        )}

        <p className="text-gray-600 text-sm mt-8">
          Ou me chame diretamente:{" "}
          <a
            href="mailto:christianguillen175@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento&body=Ol%C3%A1%20Christian%2C%20gostaria%20de%20um%20or%C3%A7amento%20para..."
            className="text-blue-400 hover:text-blue-300 underline"
          >
            christianguillen175@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contato;
