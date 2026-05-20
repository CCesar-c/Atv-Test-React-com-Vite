import { CartaoPerfil } from "../Card";

export default function Atv_CardPerfil() {
    return (
        <>
            <CartaoPerfil nome={"Davi"} profissao={"pedreiro"} foto={"https://i.pravatar.cc/15"} bio={"gosta de rebocar parede"} />
            <CartaoPerfil nome={"Gustavo"} profissao={"Professor"} foto={"https://i.pravatar.cc/40"} bio={"30 anos ensinando e 10 em psicologia"} />
            <CartaoPerfil nome={"Joao"} profissao={"Streamer"} foto={"https://i.pravatar.cc/21"} bio={"Algum dia che em 10k!!"} />
        </>
    );
}