import { Routes, Route } from "react-router-dom";
import ProductIndex from "../views";
import Login from "../views/login";

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/product" element={<ProductIndex />} />
        </Routes>
    )
}

export default RoutesIndex