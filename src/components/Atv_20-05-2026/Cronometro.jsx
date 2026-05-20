import { useEffect, useState } from "react";
import { Texto } from "../Texto";

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0); // Mudamos o nome para clareza
  const [ativo, setAtivo] = useState(false);

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

  // Sua lógica de formatação perfeitamente aplicada:
  const minutos = Math.floor(segundos / 60);
  const segsRestantes = segundos % 60;
  const formatado = `${minutos.toString().padStart(2, '0')}:${segsRestantes.toString().padStart(2, '0')}`;

  return (
    <>
      <Texto>Tempo: {formatado}</Texto>
      <button onClick={() => setAtivo(true)}>Iniciar</button>
      <button onClick={() => setAtivo(false)}>Pausar</button>
      <button onClick={() => { setAtivo(false); setSegundos(0); }}>Resetar</button>
    </>
  );
}
