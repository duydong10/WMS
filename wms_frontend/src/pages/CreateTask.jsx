import { useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";

export default function CreateTask() {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        console.log("Start Location:", start);
        console.log("End Location:", end);
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="reqCode">Request ID</Label>
                </div>
                <TextInput
                    id="reqCode"
                    type="text"
                    sizing="md"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
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
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="taskTyp">Select Task Type</Label>
                </div>
                <Select id="taskTyp" required>
                    <option value={"F01"}>"F01" - Carry and transfer rack</option>
                    <option value={"F02"}>"F02" - Empty / Full rack exchange</option>
                    <option value={"F03"}>"F03" - Carry and transfer by CMR</option>
                    <option value={"F04"}>"F04" - Rack outbound</option>
                    <option value={"F05"}>"F05" - Rotate rack</option>
                    <option value={"F06"}>"F06" - Elevator task</option>
                    <option value={"F11"}>"F11" - Transfer from high bay rack to workstation</option>
                    <option value={"F12"}>"F12" - Transfer from workstation to high bay rack</option>
                    <option value={"F13"}>"F13" - Transfer from roadway to workstation</option>
                    <option value={"F14"}>"F14" - Transfer from workstation to roadway</option>
                    <option value={"F15"}>"F15" - Shuttle from high bay rack to workstation</option>
                    <option value={"F16"}>"F16" - Shuttle from workstation to high bay rack</option>
                    <option value={"F17"}>"F17" - Shuttle from roadway to workstation</option>
                    <option value={"F18"}>"F18" - Shuttle from workstation to roadway</option>
                    <option value={"F20"}>"F20" - Cross-floor forklift main task</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="start">Start Location</Label>
                </div>
                <TextInput
                    id="start"
                    type="text"
                    sizing="md"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
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
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}