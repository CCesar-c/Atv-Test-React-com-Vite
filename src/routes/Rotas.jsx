import { Route, Routes } from "react-router-dom";
import App from "../screens/App.jsx";

export default function Rotas() {
    return(
        <Routes>
            <Route path="/" Component={App} />
        </Routes>
    )
}