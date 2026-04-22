import { useState } from 'react'
import React from 'react'
import { Rodape } from './rodape';
export function Personagens_naruto() {
    const [ninjas, setNinjas] = useState([
        { id: 1, nome: 'Naruto Uzumaki', rank: 'Genin', aldeianatal : 'Konoha', justus: "Rasengan" },
        { id: 2, nome: 'Sasuke Uchiha', rank: 'Genin', aldeianatal : 'Konoha', justus: "Chidori" },
        { id: 3, nome: 'Sakura Haruno', rank: 'Chunin', aldeianatal : 'Konoha', justus: "Healing Jutsu" },
        { id: 4, nome: 'Kakashi Hatake', rank: 'Jonin', aldeianatal : 'Konoha', justus: "Copy Ninja" },
        { id: 5, nome: 'Rock Lee', rank: 'Genin', aldeianatal : 'Konoha', justus: "Yamaki Jutsu" },
    ])
    return (
        <div style={{ display: "flex", flexDirection: "column" }} >
            <h1>Naruto a.t.v 22/04</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }} >
                {ninjas.length > 0 ? ninjas.map((ninja) => {
                    return (
                        <div key={ninja.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", padding: 10, borderRadius: 5 }}>
                            <h2>{ninja.nome}</h2>
                            <p>Rank: {ninja.rank}</p>
                            <p>Aldeia Natal: [{ninja.aldeianatal}]</p>
                            <p>Jutsus: [{ninja.justus}]</p> 
                        </div>
                    )
                }) : <p>Lista vazia</p>}
            </div>
            <Rodape />
        </div>
    );
}
