import { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

export default function AGVControl() {
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
                    <Label htmlFor="name">Start Location</Label>
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
                    <Label htmlFor="age">End Location</Label>
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