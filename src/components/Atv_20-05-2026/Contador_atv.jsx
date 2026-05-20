import { useState } from "react";
import { Texto } from "../Texto";

export default function Contador_atv() {
    const [time, setTime] = useState(0)
    return (
        <>
        <Texto>Contador: {time}</Texto>
        <button onClick={() => setTime(time + 1)}>incrementar</button>
        <button onClick={() => setTime(time - 1)}>decrementar</button>
        <button onClick={() => setTime(0)}>resetar</button>
        </>
    );
}