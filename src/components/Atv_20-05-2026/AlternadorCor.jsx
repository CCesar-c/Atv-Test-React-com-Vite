import { useState } from "react";
import { Texto } from "../Texto";

export default function AlternadorCor() {
    const [cor, setCor] = useState(false)
    return (
        <div  style={{height:"200px", width:"200px", backgroundColor:`${cor == true ? "white":"black"}` }} onClick={() => setCor(!cor)} >
        </ div>
    );
}