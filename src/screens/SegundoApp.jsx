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
    const [telAtual, setTelaAtual] = useState(`${Atv_CardPerfil.name}`)
    var Array_botoes = [
        { id: 0, nome: `${Atv_CardPerfil.name}`, componente: Atv_CardPerfil },
        { id: 0, nome: `${Contador_atv.name}`, componente: Contador_atv },
        { id: 0, nome: `${FormularioNome.name}`, componente: FormularioNome },
        { id: 0, nome: `${AlternadorCor.name}`, componente: AlternadorCor },
        { id: 0, nome: `${ListaTarefas.name}`, componente: ListaTarefas },
        { id: 0, nome: `${Calculadora_atv.name}`, componente: Calculadora_atv },
        { id: 0, nome: `${Galeria.name}`, componente: Galeria },
        { id: 0, nome: `${Quiz.name}`, componente: Quiz },
        { id: 0, nome: `${ConversorTemperatura.name}`, componente: ConversorTemperatura },
    ]
    return (
        <div>
            <Header id='Header'  >
                {Array_botoes.map((item) => {
                    return (
                        <button key={item.id} onClick={() => { item.nome == telAtual ? setTelaAtual(""):setTelaAtual(item.nome) }} >{item.nome}</button>
                    )
                })}
            </Header>
            <div id="container">
                {Array_botoes.map((tl) => {
                    if (tl.componente.name == telAtual) {
                        return (
                            <div key={tl.id} >
                                <tl.componente />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}