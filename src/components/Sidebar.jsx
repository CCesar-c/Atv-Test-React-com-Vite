import { Navegar } from "../routes/Rotas"

export function Header({ children }) {

    return (
        <div style={{ justifyContent: "space-between", color: "black", backgroundColor: "aliceblue", borderRadius: '10px', gap: 10 }}>
            {children}
        </div>)
}
export function Footer() {
    const nav = Navegar()
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center" }} >
            <button onClick={() => nav("anterior") }>{"<-"}</button>
            <button onClick={() => nav("seguinte")} >{"->"}</button>
        </div>
    )
}
