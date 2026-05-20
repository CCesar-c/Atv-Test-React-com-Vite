import { useState } from "react";
import { Texto } from "../Texto";

export default function FormularioNome() {
    const [nome, setNome] = useState("")
    return (
        <>
            <input type="text" onChange={(e) => setNome(e.target.value)} />
            <Texto>Ola! {nome}</Texto>
        </>
    );
}