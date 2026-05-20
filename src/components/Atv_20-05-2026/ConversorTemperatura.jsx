import { useState } from "react";
import { Texto } from "../Texto";

export default function ConversorTemperatura() {
    const [valor, setValor] = useState("")
    return (
        <>
            <input type="text" onChange={(e) => setValor(e.target.value)} />
            <Texto>{"c -> f: " + ((valor * 9/5) + 32).toFixed(2) }</Texto>
            <Texto>{"c -> K: " + valor + 273.15.toFixed(2) }</Texto>
        </>
    );
}