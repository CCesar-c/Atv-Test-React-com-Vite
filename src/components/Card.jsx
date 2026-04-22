import React, { useState } from 'react';
import '../css/App.css';


export function CartaoPerfil({ nome, idade, profissao, foto, endereco, cpf, genero }) {
  return (
    <div className="cartao">
      <img className="foto" src={foto} alt={nome || 'Desconhecido'} />
      <h2 className="nome">{nome || 'Desconhecido'}</h2>
      <p className="idade">{idade || 'Desconhecido'} anos</p>
      <p className="profissao">{profissao || 'Desconhecido'}</p>
      <p className="endereco">Endereço: {endereco || 'Desconhecido'}</p>
      <p className="cpf">CPF: {cpf || 'Desconhecido'}</p>
      <p className="genero">Gênero: {genero || 'Desconhecido'}</p>
    </div>
  );
}


