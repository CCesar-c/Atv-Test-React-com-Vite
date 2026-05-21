import { Header } from "../components/Header"
import Atv_CardPerfil from '../components/Atv_20-05-2026/Atv.jsx';
import Contador_atv from '../components/Atv_20-05-2026/Contador_atv.jsx';
import FormularioNome from '../components/Atv_20-05-2026/FormularioNome.jsx';
import AlternadorCor from '../components/Atv_20-05-2026/AlternadorCor.jsx';
import ListaTarefas from '../components/Atv_20-05-2026/ListaTarefas.jsx';
import Calculadora_atv from '../components/Atv_20-05-2026/Calculadora_atv.jsx';
import Galeria from '../components/Atv_20-05-2026/Galeria.jsx';
import Quiz from '../components/Atv_20-05-2026/Quiz.jsx';
import ConversorTemperatura from '../components/Atv_20-05-2026/ConversorTemperatura.jsx';
import { useState } from "react";
export function SegundoApp() {
    const [telAtual,setTelaAtual] = useState("")
    var Array_botoes = [
        {id: 0, nome: "Alternador de cor" },
    ]
    const Telas = [
        { componente: AlternadorCor}
    ]
    return (
        <div>
            <Header id='Header'  >
                {Array_botoes.map((item, key) => {
                    return (
                        <button key={key} onClick={() => { setTelaAtual(item.telaid) }} >{item.nome}</button>
                    )
                })}
            </Header>
            <div>
                {Telas.map((tl, i) => {

//                     return (
// {                        if (Array_botoes[i].id == i) {
                            
//                         }}
//                     )
                })}
            </div>
        </div>
    )
}