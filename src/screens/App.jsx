import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import { CartaoPerfil } from '../components/Card.jsx'
import { Contador } from '../components/Contador.jsx'
import { ListaDeCompras } from '../components/listaCompras.jsx'
import { Header } from '../components/Header.jsx'
function App() {
  const [Valor_class, setClass] = useState("tela1")

  const [Valor_sinal, setSinal] = useState("")
  const [Value_nro1, setValue_nro1] = useState(0)
  const [Value_nro2, setValue_nro2] = useState(0)
  const [Value_resultado, setResultado] = useState(0)


  const [usuarios, setUsuarios] = useState([]);

  const [loading, setLoading] = useState(false);

  async function buscarUsuarios() {

    setLoading(true);

    try {

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      setUsuarios(response.data);

    } catch (error) {

      console.error("Erro!", error);

    } finally {

      setLoading(false);

    }

  }

  function calcular_valor() {
    switch (Valor_sinal) {
      case "+":
        setResultado(Value_nro1 + Value_nro2)
        break;
      case "-":
        setResultado(Value_nro1 - Value_nro2)
        break;
      case "*":
        setResultado(Value_nro1 * Value_nro2)
        break;
      case "/":
        setResultado(Value_nro1 / Value_nro2)
        break;
      default:
        setResultado("Sinal indefinido: " + Valor_sinal)
        break;
    }

  }

  function calcular_idade() {
    var pergunta = String(prompt("Ja fez aniversario??"))
    if (pergunta.trim() == "sim") {
      setResultado(Value_nro2 - Value_nro1)
    } else if (pergunta.trim() == "nao") {
      setResultado((Value_nro2 - Value_nro1) - 1)
    } else {
      setResultado("Resposta indefinida fdp: " + Valor_sinal)
    }
  }
  return (
    <>
      <Header id='Header'  >
        <button onClick={() => {
          setClass("tela1")
          setResultado(0)
        }} >Calculadora</button>
        <button onClick={() => {
          setClass("tela2")
          setResultado(0)
        }}  >Calculador de idade </button>
        <button onClick={() => {
          setClass("tela3")
          setResultado(0)
        }} > Cartão de perfil</button>
        <button onClick={() => {
          setClass("tela4")
          setResultado(0)
        }} >Lista de compras</button>
        <button onClick={() => {
          setClass("tela5")
          setResultado(0)
        }} >contador</button>
        <button onClick={() => {
          setClass("tela6")
          setResultado(0)
        }} >Tela Axios</button>
      </Header>
      {/* tela 1 */}
      <div id='container'>
        {/* tela 1 */}
        {Valor_class == "tela1" ?
          <div id='capsule'  >
            <h1 >Calculadora </h1>
            <input placeholder='Primeiro nro da conta' type='number' maxLength={10} onChange={(e) => {
              setValue_nro1(Number(e.target.value.trim()))
            }} />
            <br />
            <input placeholder='tipo da conta' type='text' maxLength={1} onChange={(e) => {
              setSinal(e.target.value.trim())
            }} />
            <br />
            <input placeholder='Segundo numero da conta' type='number' maxLength={10} onChange={(e) => {
              setValue_nro2(Number(e.target.value.trim()))
            }} />
            <br />
            <button onClick={() => { calcular_valor() }} >Calcular o resultado</button>
            <br />
            <text>Resultado: {Value_resultado}</text>
          </div>
          : null}
        {/* tela 2 */}
        {Valor_class == "tela2" ? <div id='capsule'  >
          <h1>Calculador de idade </h1>
          <input placeholder='Ano de nascimento' type='number' maxLength={10} onChange={(e) => {
            setValue_nro1(Number(e.target.value.trim()))
          }} />
          <br />
          <input placeholder='Ano atual' type='number' maxLength={10} onChange={(e) => {
            setValue_nro2(Number(e.target.value.trim()))
          }} />
          <br />
          <button onClick={() => { calcular_idade() }} >Calcular o resultado</button>
          <br />
          <text>Voce tem: {Value_resultado}</text>
        </div> : null}
        {/* tela 3 */}
        {Valor_class == "tela3" ? <div id='capsule' style={{ display: "flex", flexDirection: "column" }}  >
          <h1>Tela de perfil</h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <CartaoPerfil nome="Ana Silva" idade={28} profissao="Desenvolvedora Front-end" foto="https://i.pravatar.cc/150?img=5" />
            <CartaoPerfil nome="gustavo Silva" idade={18} profissao="Desenvolvedora back-end" foto="https://i.pravatar.cc/150?img=1" />
          </div>
        </div>
          : null}
        {/* tela 4 */}
        {Valor_class == "tela4" ? <div id='capsule' style={{ display: "flex", flexDirection: "column" }} >
          <h1>Lista de compras</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ListaDeCompras />
          </div>
        </div> : null}
        {/* { tela5} */}
        {Valor_class == "tela5" ? <div id='capsule' style={{ display: "flex", flexDirection: "column" }} >
          <h1>Tela de contador</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Contador />
          </div>
        </div> : null}
        {/*  tela 6 */}
        {Valor_class == "tela6" ? <div id='capsule' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
          <h1>React + Axios (Consumo de API) 20/04 </h1>
          <button onClick={() => { buscarUsuarios() }} >Buscar usuarios</button>
          {usuarios != null ? usuarios.map((user, key) => {
            return (
              <div style={{ margin: "7px", padding: "5px", border: "1px solid black", borderRadius: "8px" }} >
                <div key={key}>
                  <text>Nome: {user.name} </text>
                  <text>Email: {user.email} </text>
                  <text>Cidade: {user.address.city} </text>
                </div>
              </div>
            )
          }) : <text>Sem usuarios</text>}
        </div> : null}
      </div>
    </>
  )
}

export default App
