import { createContext, use, useContext, useState } from "react";

const UserContext = createContext(null)

export function UserProvider({ children }) {

    const [user, SetUser] = useState(
        {
        nome: "Larissa",
    },
    {
        nome: "Gustava"
    },
    {
        nome:"Davi"
    }
)

    return (
        <UserContext.Provider  value={user}>
            {children}
        </UserContext.Provider>        
    )
}

export function useUsuario(){
    return useContext(UserContext);
}