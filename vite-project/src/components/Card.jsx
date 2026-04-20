import React, { useState } from 'react';
import '../css/App.css';


export function CartaoPerfil({ nome, idade, profissao, foto }) {
  return (
    <div className="cartao">
      <img className="foto" src={foto} alt={nome} />
      <h2 className="nome">{nome}</h2>
      <p className="idade">{idade} anos</p>
      <p className="profissao">{profissao}</p>
    </div>
  );
}


