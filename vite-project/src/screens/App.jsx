import { useEffect, useState } from 'react'
import '../css/App.css';
import { Header } from '../components/Header.jsx'
function App() {
  useEffect(() => {
    document.querySelector('.tela1').classList.add("enable")
    document.querySelector('.tela2').classList.add("disable")
  }, [])
  const [Valor_sinal, setSinal] = useState("")
  const [Value_nro1, setValue_nro1] = useState(0)
  const [Value_nro2, setValue_nro2] = useState(0)
  const [Value_resultado, setResultado] = useState(0)
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
    } else {
      setResultado((Value_nro2 - Value_nro1) - 1)
    }
  }
  return (
    <>
      <Header id='Header' >
        <button onClick={() => {

          document.querySelector('.tela2').classList.toggle("enable")
          document.querySelector('.tela2').classList.toggle("disable")
          document.querySelector('.tela1').classList.toggle("disable")
          document.querySelector('.tela1').classList.toggle("enable")
          setResultado(0)
        }} >Calculadora</button>
        <button onClick={() => {
          document.querySelector('.tela1').classList.toggle("enable")
          document.querySelector('.tela1').classList.toggle("disable")
          document.querySelector('.tela2').classList.toggle("disable")
          document.querySelector('.tela2').classList.toggle("enable")
        }}  >Calculador de idade </button>
      </Header>
      {/* tela 1 */}
      <home>
        <div id='capsule' className='tela1' >
          <h1>Calculadora </h1>
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
        {/* tela 2 */}
        <div id='capsule' className='tela2' >
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
        </div>
      </home>
    </>
  )
}

export default App
