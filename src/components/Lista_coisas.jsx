import axios from "axios";
import { useEffect } from "react";

export default function Lista_filmes() {
    const obter_filmes = async () => {
        const response = await axios.get('https://localhost:3000/filmes');
        console.log(response.data);
    }
    useEffect(() => {
        obter_filmes();
    }, []);
    return (
        <div>
            
        </div>
    );
}