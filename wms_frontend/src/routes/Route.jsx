// src/routes/Route.jsx
// --------------------------------------------------------
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import CreateTask from "../pages/CreateTask.jsx";
import CancelTask from "../pages/CancelTask.jsx";
import AgvCallback from "../pages/AgvCallback.jsx";
import ContinueTask from "../pages/ContinueTask.jsx";
import Login from "../pages/Login.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";
import ChangeLanguage from "../pages/ChangeLanguage.jsx";

function ProtectedRoute() {
  const token = localStorage.getItem("jwtToken");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="change_language" element={<ChangeLanguage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create_task" element={<CreateTask />} />
            <Route path="cancel_task" element={<CancelTask />} />
            <Route path="agv_callback" element={<AgvCallback />} />
            <Route path="continue_task" element={<ContinueTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
