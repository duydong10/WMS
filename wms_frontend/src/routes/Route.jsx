// src/routes/Route.jsx
// --------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Inbound.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import AGVControl from '../pages/AGVControl.jsx'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="agv_control" element={<AGVControl />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}