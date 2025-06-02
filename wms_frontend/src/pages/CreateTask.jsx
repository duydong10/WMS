import { useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";
import { fetchCreateTask } from "../services/APIs";

export default function CreateTask() {
    const [begin, setBegin] = useState("");
    const [end, setEnd] = useState("");
    const [reqCode, setReqCode] = useState("");
    const [reqTime, setReqTime] = useState("");
    const [taskTyp, setTaskTyp] = useState("");
    const [wbCode, setWbCode] = useState("");
    const [message, setMessage] = useState("");
    const [msgType, setMsgType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "reqCode": reqCode,
            "reqTime": reqTime,
            "taskTyp": taskTyp,
            "wbCode": wbCode,
            "begin": begin,
            "end": end,
        };
        console.log("Data", data);
        fetchCreateTask(data)
            .then((res) => {
                setMessage("Task created successfully!");
                setMsgType(true);
                console.log("Response:", res);
                setTimeout(() => {
                    setMessage("");
                    setMsgType("");
                }, 3000);
            })
            .catch((err) => {
                setMessage("Task created unsuccessfully!");
                setMsgType(false);
                console.log("Error:", err);
                setTimeout(() => {
                    setMessage("");
                    setMsgType("");
                }, 3000);
            });

    };

    return (
        <article>
            <title>Create Task</title>

            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="reqCode">Request ID</Label>
                    </div>
                    <TextInput
                        id="reqCode"
                        type="text"
                        sizing="md"
                        value={reqCode}
                        onChange={(e) => setReqCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="reqTime">Request Timestamp</Label>
                    </div>
                    <TextInput
                        id="reqTime"
                        type="text"
                        sizing="md"
                        value={reqTime}
                        onChange={(e) => setReqTime(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="taskTyp">Task Type</Label>
                    </div>
                    <Select id="taskTyp" onChange={(e) => setTaskTyp(e.target.value)} required>
                        <option value="">Select Task Type</option>
                        <option value="F01">"F01" - Carry and transfer rack</option>
                        <option value="F02">"F02" - Empty / Full rack exchange</option>
                        <option value="F03">"F03" - Carry and transfer by CMR</option>
                        <option value="F04">"F04" - Rack outbound</option>
                        <option value="F05">"F05" - Rotate rack</option>
                        <option value="F06">"F06" - Elevator task</option>
                        {/* <option value="F11">"F11" - Transfer from high bay rack to workstation</option>
                        <option value="F12">"F12" - Transfer from workstation to high bay rack</option>
                        <option value="F13">"F13" - Transfer from roadway to workstation</option>
                        <option value="F14">"F14" - Transfer from workstation to roadway</option>
                        <option value="F15">"F15" - Shuttle from high bay rack to workstation</option>
                        <option value="F16">"F16" - Shuttle from workstation to high bay rack</option>
                        <option value="F17">"F17" - Shuttle from roadway to workstation</option>
                        <option value="F18">"F18" - Shuttle from workstation to roadway</option>
                        <option value="F20">"F20" - Cross-floor forklift main task</option> */}
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="wbCode">Workstation Code</Label>
                    </div>
                    <TextInput
                        id="wbCode"
                        type="text"
                        sizing="md"
                        value={wbCode}
                        onChange={(e) => setWbCode(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="begin">Begin Location</Label>
                    </div>
                    <TextInput
                        id="begin"
                        type="text"
                        sizing="md"
                        value={begin}
                        onChange={(e) => setBegin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="end">End Location</Label>
                    </div>
                    <TextInput
                        id="end"
                        type="text"
                        sizing="md"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        required
                    />
                </div>

                <Button type="submit">Submit</Button>
                <div id="submit-btn" className={`text-sm ${msgType === true ? 'text-green-500' : 'text-red-500'}`}>{message}</div>
            </form>
        </article>
    );
}