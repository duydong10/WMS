// src/pages/Login.jsx
//--------------------------------------------------------

import { Label, TextInput, Button, createTheme } from "flowbite-react";
import { useState } from "react";
import { fetchLogin } from "../services/APIs";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';
import bg_login from '../assets/bg-login.png';
import useDarkModeDetector from "../components/DarkMode.jsx";
import SubmitAlert from "../components/SubmitAlert";

const labelTheme = createTheme({
    label:
    {
        "root": {
            "base": "text-sm font-medium",
            "disabled": "opacity-50",
            "colors": {
                "default": "text-black dark:text-white",
                "info": "text-cyan-500 dark:text-cyan-600",
                "failure": "text-red-700 dark:text-red-500",
                "warning": "text-yellow-500 dark:text-yellow-600",
                "success": "text-green-700 dark:text-green-500"
            }
        }
    }
});

export default function Login() {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [msgType, setMsgType] = useState("");
    const [message, setMessage] = useState("");
    const [msgTimeout, setMsgTimeout] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const login_data = {
            "account": account,
            "password": password
        };

        try {
            const res = await fetchLogin(login_data);
            setMsgType(res.msgType);
            setMessage(res.message);
            if (res.msgType === "success") {
                localStorage.setItem("account", account);
                setMsgTimeout(true);
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            } else if (res.msgType === "failure") {
                setMsgTimeout(true);
                setTimeout(() => {
                    setMsgTimeout(false);
                }, 3000);
            }
        } catch (err) {
            console.error("Login failed:", err);
        }
    }

    const isDarkMode = useDarkModeDetector();

    return (
        <article>
            <title>Login</title>
            <img src={bg_login} className="w-screen h-screen" alt="Background" />
            <div className="fixed top-1/2 left-1/2 z-49 -translate-1/2 bg-white dark:bg-black rounded-2xl opacity-70 w-11/12 md:w-120 h-110"></div>
            <div className="fixed w-2/3 md:w-80 top-1/2 left-1/2 z-50 -translate-1/2 rounded-2xl">
                <a href="https://tanhungha.com.vn" className="flex justify-center">
                    {isDarkMode ? (
                        <img src={logoDark} className="h-10 sm:h-15" alt="Logo" />
                    ) : (<img src={logo} className="h-10 sm:h-15" alt="Logo" />)}
                </a>
                <form className="flex flex-col gap-4 opacity-100" onSubmit={handleLogin}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="account" theme={labelTheme.label}>Account</Label>
                        </div>
                        <TextInput
                            id="account"
                            type="text"
                            placeholder="Enter account ..."
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" theme={labelTheme.label}>Password</Label>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="Enter password ..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Label className="pb-2"></Label>
                    <Button type="submit">Login</Button>
                </form>
            </div>
            <SubmitAlert message={message} msgType={msgType} msgTimeout={msgTimeout} />
        </article>
    );
}
