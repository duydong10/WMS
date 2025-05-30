// src/routes/Route.jsx
// --------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import FormFormat from '../pages/Form.jsx'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="form" element={<FormFormat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}