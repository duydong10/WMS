import { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

export default function FormFormat() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn reload trang
        console.log("Name:", name);
        console.log("Age:", age);
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name">Name</Label>
                </div>
                <TextInput
                    id="name"
                    type="text"
                    sizing="md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="age">Age</Label>
                </div>
                <TextInput
                    id="age"
                    type="number"
                    sizing="md"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}