import { useState } from "react";
import { Texto } from "../Texto";

export default function ListaTarefas() {
    const [tarefa, setTarefa] = useState([])
    const [nova, setNova] = useState("")

    return (
        <>
            <input type="text" onChange={(e) => {
                setNova(e.target.value)
                console.log(nova)
            }} />
            <button onClick={() => {

                setTarefa([...tarefa, nova])
                setNova("")
                console.log(tarefa)
            }} >criar</button>
            {tarefa && tarefa.map((task) => (<div>Nome: {task}</div>))}

        </>
    );
}