import { useState } from "react";
import { Texto } from "../Texto";

export default function Quiz() {
  const perguntas = [
    { id: 0, pergunta: "Capital do brasil?", resposta: "brasilia" },
    { id: 1, pergunta: "Maior pais do mundo", resposta: "Russia" },
    { id: 2, pergunta: "Quanto é raiz de 144", resposta: "12" }
  ];

  const opcoes = [
    "catapimbas", "seila", "nao tem", "brasil", "coreia", "espanha", "1", "14", "10"
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
      
      {/* Botão da resposta correta */}
      <button onClick={() => responder(true)}>
        {perguntas[pgAtual].resposta}
      </button>

      {/* Botão da resposta errada (aleatória) */}
      <button onClick={() => responder(false)}>
        {opcoes[Math.floor(Math.random() * opcoes.length)]}
      </button>

      {/* Botão para pular/avançar */}
      <button onClick={avancarPergunta}>Avançar</button>
    </div>
  );
}
