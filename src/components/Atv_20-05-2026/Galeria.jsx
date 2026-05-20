import { useState } from "react";
import { Texto } from "../Texto";

export default function Galeria() {
    const [foto, setFoto] = useState([
        {id:0, url:'https://fastly.picsum.photos/id/579/300/200.jpg?hmac=ceKRzFQQ88b9OOCKc4namSIx8pnhjuqAp6tWuEZ1nm8'},
        {id:1, url:'https://fastly.picsum.photos/id/235/300/200.jpg?hmac=OgmBtL2QjDkQL7wZKMebAZnkfCuZs7GtBi9ngOokiWU'},
        {id:2, url:'https://fastly.picsum.photos/id/63/300/200.jpg?hmac=fIasgHoSbyiqE83FdjmxzRR2vjfUKDNktGG8MNuO_4Q'},
        {id:3, url:'https://fastly.picsum.photos/id/950/300/200.jpg?hmac=bc06HNi3b3bo0903SM7vTDUyRdprCQy03lwYrQvhryA'},
        {id:4, url:'https://fastly.picsum.photos/id/289/300/200.jpg?hmac=xSPW2bCffPuSVnJCSKV6_084yN4TTWNu_iZJhuaDaxM'},
        {id:5, url:'https://fastly.picsum.photos/id/769/300/200.jpg?hmac=0doLew7MDR0vIsVrprh2jksydd7XsVSAM-0TzgevT0Y'}
    ])
     const [fotoS, setFotoS] = useState(0)
    return (
        <>
            {foto.map((ft) =>(
                <div>
                    <img src={ft.url} alt={ft.id} height={fotoS == ft.id ? 500:100} width={fotoS == ft.id ? 500:100} onClick={() => setFotoS(ft.id)} />
                </div>
            ))}
        </>
    );
}