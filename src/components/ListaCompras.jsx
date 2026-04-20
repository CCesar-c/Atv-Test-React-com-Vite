import React, { useState } from 'react';
import '../css/App.css';

export function ListaDeCompras() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      const novoItem = {
        id: Date.now(),
        nome: novoItem,
        comprado: false,
        quantidade: 1,
      };
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  const marcarComprado = (id) => {
    setItens(
      itens.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const removerItem = (id) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  const limparComprados = () => {
    setItens(itens.filter((item) => !item.comprado));
  };

  const totalItens = itens.length;
  const totalComprados = itens.filter((item) => item.comprado).length;
  const totalQuantidade = itens.reduce((total, item) => total + item.quantidade, 0);

  return (
    <div>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.comprado}
                  onChange={() => marcarComprado(item.id)}
                />
                {item.nome} - Quantidade: {item.quantidade}
              </label>
              <button onClick={() => removerItem(item.id)}>🗑️</button>
              <style jsx>{`
                input:checked + button {
                  text-decoration: line-through;
                }
              `}</style>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={limparComprados}>Limpar Comprados</button>
      </div>
      <div>
        <p>Total de itens: {totalItens}</p>
        <p>Total comprados: {totalComprados}</p>
        <p>Total de quantidade: {totalQuantidade}</p>
      </div>
    </div>
  );
}
