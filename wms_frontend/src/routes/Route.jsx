// src/routes/Route.jsx
// --------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Inbound.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import CreateTask from '../pages/CreateTask.jsx'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="create_task" element={<CreateTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}