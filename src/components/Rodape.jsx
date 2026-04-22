import '../css/App.css';
import React from 'react';
import { Texto } from './Texto';

export function Rodape() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "Down", justifyContent: "center", marginTop: 10 }} >
            <Footer />
        </div>
    )
}
function Footer() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20 }} >
            <Texto>Aldeia Oculta da Folha — Protegendo a paz desde sempre</Texto>
        </div>
    )
}