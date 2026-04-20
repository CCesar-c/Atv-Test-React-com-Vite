import React, { useState } from 'react';
import '../css/App.css';
export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const incrementar5 = () => {
    setContador(contador + 5);
  };

  const resetar = () => {
    setContador(0);
  };

  const mensagem = () => {
    if (contador === 0) {
      return 'Comece a contar!';
    } else if (contador > 0 && contador < 10) {
      return 'Continue assim!';
    } else if (contador >= 10) {
      return 'Você está indo muito bem! 🎉';
    } else {
      return 'Ops, valor negativo!';
    }
  };

  const cor = () => {
    if (contador > 0) {
      return 'green';
    } else if (contador < 0) {
      return 'red';
    } else {
      return 'gray';
    }
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <p>{mensagem()}</p>
      <button onClick={incrementar}>Incrementar (+1)</button>
      <button onClick={decrementar}>Decrementar (-1)</button>
      <button onClick={incrementar5}>Incrementar +5</button>
      <button onClick={resetar}>Resetar</button>
      <h1 style={{ color: cor() }}>{contador}</h1>
    </div>
  );
}
