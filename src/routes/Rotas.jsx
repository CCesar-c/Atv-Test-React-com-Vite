import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useNavigate } from "react-router-dom";
import App from "../screens/App.jsx";
import { SegundoApp } from "../screens/SegundoApp.jsx";
import { Component } from "react";

const Rotes = [
    { path: '/', component: App },
    { path: '/SegundoApp', component: SegundoApp }
]

import {  useLocation } from "react-router-dom";

export function Navegar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navegar = (direcao) => {
        const currentIndex = Rotes.findIndex(r => r.path === pathname);

        if (direcao === "seguinte" && currentIndex < Rotes.length - 1) {
            navigate(Rotes[currentIndex + 1].path);
        } else if (direcao === "anterior" && currentIndex > 0) {
            navigate(Rotes[currentIndex - 1].path);
        }
    };

    return navegar;
}


export default function Rotas() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            Rotes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
            ))
        )
    );
    return <RouterProvider router={router} />;
}
