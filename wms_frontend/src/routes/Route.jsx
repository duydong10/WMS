// src/routes/Route.jsx
// --------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import CreateTask from '../pages/CreateTask.jsx'
import CancelTask from '../pages/CancelTask.jsx'
import AgvCallback from '../pages/AgvCallback.jsx'
import ContinueTask from '../pages/ContinueTask.jsx'

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="create_task" element={<CreateTask />} />
                    <Route path="cancel_task" element={<CancelTask />} />
                    <Route path="agv_callback" element={<AgvCallback />} />
                    <Route path="continue_task" element={<ContinueTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}