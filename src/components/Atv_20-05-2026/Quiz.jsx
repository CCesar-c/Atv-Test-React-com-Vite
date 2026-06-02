import { useEffect, useState } from "react";
import { Texto } from "../Texto";

export default function Quiz() {
  const perguntas = [
    { id: 0, pergunta: "Capital do brasil?", resposta: ["nao tem", "brasilia", "sim"] },
    { id: 1, pergunta: "Maior pais do mundo?", resposta: ["Russia", "China", "India"] },
    { id: 2, pergunta: "Quanto é raiz de 144? ", resposta: ["77", "144", "12"] }
  ];
  const [pontos, setPontos] = useState(0);
  const [pgAtual, setPgAtual] = useState(0);

  const quizFinalizado = pgAtual >= perguntas.length;

  const avancarPergunta = () => {
    setPgAtual(pgAtual + 1);
  };

  const responder = (correto) => {
    if (correto) {
      setPontos(pontos + 1);
      alert("Acertou!");
    } else {
      alert("Errou!");
    }
    avancarPergunta();
  };

  if (quizFinalizado) {
    return (
      <div>
        <Texto>Terminou!</Texto>
        <p>Sua pontuação final: {pontos} de {perguntas.length}</p>
        <button onClick={() => { setPgAtual(0); setPontos(0); }}>Reiniciar</button>
      </div>
    );
  }

  return (
    <div>
      <Texto>{perguntas[pgAtual].pergunta}</Texto>
      <button onClick={() => responder(false)}>
        {perguntas[pgAtual].resposta[pgAtual]}
      </button>

      {/* Botão da resposta errada (aleatória) */}
      <button onClick={() => responder(true)}>
        {perguntas[pgAtual].resposta[Math.floor(Math.random() * perguntas.length)]}
      </button>
      {/* Botão da resposta errada (aleatória) */}
      <button onClick={() => responder(false)}>
        {perguntas[pgAtual].resposta[Math.floor(Math.random() * perguntas.length)]}
      </button>

      {/* Botão para pular/avançar */}
      <button onClick={() => { avancarPergunta() }}>Avançar</button>
    </div>
  );
}
