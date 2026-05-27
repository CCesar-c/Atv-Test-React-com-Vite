import { useContext } from "react"
import { UserContext } from "../../Context/Contextos"


export function PCA() {
    const Pessoas = useContext(UserContext)
    return(
        <div>
            <h1>Usuarios</h1>
            {Pessoas.map((ps, i) =>{
                <div key={i}>
                    <p>{ps.nome}</p>
                </div>
            })}
        </div>
    )
}