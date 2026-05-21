import { Route, Routes } from "react-router-dom";
import App from "../screens/App.jsx";
import { SegundoApp } from "../screens/SegundoApp.jsx";


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" Component={App} />
            <Route path="/SegundoApp" Component={SegundoApp} />
        </Routes>
    )
}