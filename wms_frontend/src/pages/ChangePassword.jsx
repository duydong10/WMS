// src/pages/ChangePassword.jsx
// --------------------------------------------------------
import { useState } from 'react';
import SubmitAlert from '../components/SubmitAlert';
import { fetchChangePassword } from '../services/APIs';
import { Button, Label, TextInput } from 'flowbite-react';

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState('');
    const [msgTimeout, setMsgTimeout] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "account": localStorage.getItem("account"),
            "oldPassword": oldPassword,
            "newPassword": newPassword,
        };
        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match!");
            setMsgType("failure");
            setTimeout(() => {
                setMessage(null);
                setMsgType(null);
            }, 3000);
        } else {
            console.log("Data", data);

            fetchChangePassword(data)
                .then((res) => {
                    setMessage("Password changed successfully!");
                    setMsgType("success");
                    setMsgTimeout(true);
                    console.log("Response:", res);
                    setTimeout(() => {
                        setMsgTimeout(false);
                    }, 3000);
                })
                .catch((err) => {
                    setMessage("Password changed unsuccessfully!");
                    setMsgType("failure");
                    setMsgTimeout(true);
                    console.log("Error:", err);
                    setTimeout(() => {
                        setMsgTimeout(false);
                    }, 3000);
                });
            setTimeout(() => {
                localStorage.removeItem("jwtToken");
                window.location.href = "/login";
            }, 3000);
        }
    };

    return (
        <article>
            <title>Change Password</title>
            <h1 className="text-2xl font-bold mb-4">Change Password</h1>
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <div className="flex w-full sm:w-2/3 md:w-1/2 flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="oPass">Old Password</Label>
                            </div>
                            <TextInput
                                id="oPass"
                                type="password"
                                sizing="md"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nPass">New Password</Label>
                            </div>
                            <TextInput
                                id="nPass"
                                type="password"
                                sizing="md"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="cPass">Confirm Password</Label>
                            </div>
                            <TextInput
                                id="cPass"
                                type="password"
                                sizing="md"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <Button type="submit">Submit</Button>
                </div>
                <SubmitAlert message={message} msgType={msgType} msgTimeout={msgTimeout} />
            </form>
        </article>
    )
}
