import { useEffect, useState } from "react";
import { Texto } from "../Texto";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    let interval = null;

    if (ativo) {
      interval = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [ativo]);

  const minutos = Math.floor(segundos / 60);
  const segsRestantes = segundos % 60;
  const formatado = `${minutos.toString().padStart(2, '0')}:${segsRestantes.toString().padStart(2, '0')}`;

  function enviar_historico() {
    if (ativo == true && segundos != 0) {
      setHistorico((prev) => [...prev, formatado])
    }
  }



  return (
    <div style={{ flexDirection: "column", display: "flex", backgroundColor: "white", padding: "10px", borderRadius: "15px" }}>
      <Texto>Tempo: {formatado}</Texto>
      <div>
        <button onClick={() => setAtivo(true)}>Iniciar</button>
        <button onClick={() => setAtivo(false)}>Pausar</button>
        <button onClick={() => { setAtivo(false); setSegundos(0); enviar_historico() }}>Resetar</button>
      </div>
      <div>
        {historico.map((h, i) => {
          return (
            <div style={{ margin: "10px" }}>
              <Texto>id: {i} tempo: {h} </Texto>
            </div>
          )
        })}
      </div>
    </div>
  );
}
