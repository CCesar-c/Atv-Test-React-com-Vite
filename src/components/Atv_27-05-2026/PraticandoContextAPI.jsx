import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../Context/Contextos"


export function PCA() {
    const [pessoas, setPessoas] = useState([])
    let Personas = useContext(UserContext) || []
    useEffect(() => {
        setPessoas(Personas)
        eval("console.clear()")
    }, [])
    console.log(pessoas)
    return (
        <div>
            <h1>Usuarios</h1>
            {pessoas.map((ps, i) => {
                return (
                    <div key={i}>
                        <p>id:{i} Ola!, {ps.nome}</p>
                    </div>
                )
            })}
        </div>
    )
}