import { useState } from "react";
import { Texto } from "../Texto";

export default function Calculadora_atv() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)
    return (
        <>
            <input type="number" placeholder="num 1" onChange={(e) => {
                setNum1(e.target.value)
            }} />
            <input type="number" placeholder="num 2" onChange={(e) => {
                setNum2(e.target.value)
            }} />
            <button type="button" onClick={() => setRes(Number(num1) + Number(num2))} >+</button>
            <button type="button" onClick={() => setRes(Number(num1) - Number(num2))}>-</button>
            <button type="button" onClick={() => setRes(Number(num1) * Number(num2))}>*</button>
            <button type="button" onClick={() => setRes(Number(num1) / Number(num2))}>/</button>
            <Texto>resultado: {res}</Texto>
        </>
    );
}