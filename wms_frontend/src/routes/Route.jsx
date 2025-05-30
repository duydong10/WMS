// src/routes/Route.jsx
// --------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import Demo from '../pages/Demo.jsx'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="demo" element={<Demo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}