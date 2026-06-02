import { createContext, use, useContext, useState } from "react";


export const TemaContext = createContext(null)

export function TemaProvider({ children }) {
    const [tema, SetTema] = useState("white")
    function TrocarCor() {
        tema == "white" ? SetTema("black") : SetTema("white");
    }
    return (
        <TemaContext.Provider value={{ tema, TrocarCor }} >
            {children}
        </TemaContext.Provider>
    )
}

export const UserContext = createContext(null)

export function UserProvider({ children }) {

    const [user, SetUser] = useState(
        [
            {
                nome: "Larissa",
            },
            {
                nome: "Gustavo"
            },
            {
                nome: "Davi"
            }
        ]
    )

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}


export function useUsuario() {
    return useContext(UserContext);
}