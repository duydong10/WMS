// src/pages/CreateTask.jsx
// --------------------------------------------------------
import { useState } from "react";
import { Label, TextInput, Button, Select, Textarea } from "flowbite-react";
import { fetchCreateTask } from "../services/APIs";
import SubmitAlert from "../components/SubmitAlert.jsx";

export default function CreateTask() {
  const [posCodePath, setPosCodePath] = useState(
    `[{"positionCode": "A1","type": "00"},{"positionCode": "A2","type": "00"}]`
  );
  const [reqCode, setReqCode] = useState("");
  const [reqTime, setReqTime] = useState("");
  const [taskTyp, setTaskTyp] = useState("");
  const [wbCode, setWbCode] = useState("");
  const [podCode, setPodCode] = useState("");
  const [podDir, setPodDir] = useState("");
  const [podTyp, setPodTyp] = useState("1");
  const [agvCode, setAgvCode] = useState("");
  const [taskCode, setTaskCode] = useState("");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [msgTimeout, setMsgTimeout] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      reqCode: reqCode,
      reqTime: reqTime,
      taskTyp: taskTyp,
      wbCode: wbCode,
      podCode: podCode,
      podDir: podDir,
      podTyp: podTyp,
      agvCode: agvCode,
      taskCode: taskCode,
      positionCodePath: JSON.parse(posCodePath),
    };
    console.log("Data", data);
    fetchCreateTask(data)
      .then((res) => {
        setMessage("Task created successfully!");
        setMsgType("success");
        setMsgTimeout(true);
        console.log("Response:", res);
        setTimeout(() => {
          setMsgTimeout(false);
        }, 3000);
      })
      .catch((err) => {
        setMessage("Task created unsuccessfully!");
        setMsgType("failure");
        setMsgTimeout(true);
        console.log("Error:", err);
        setTimeout(() => {
          setMsgTimeout(false);
        }, 3000);
      });
  };

  return (
    <article>
      <title>Create Task</title>
      <h1 className="text-2xl font-bold mb-4">Create Task</h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/3 flex-col gap-4">
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
              <Select
                id="taskTyp"
                onChange={(e) => setTaskTyp(e.target.value)}
                required
              >
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
                <Label htmlFor="podCode">Rack ID</Label>
              </div>
              <TextInput
                id="podCode"
                type="text"
                sizing="md"
                value={podCode}
                onChange={(e) => setPodCode(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="podDir">Rack Directions</Label>
              </div>
              <Select id="podDir" onChange={(e) => setPodDir(e.target.value)}>
                <option value="">Select Rack Directions</option>
                <option value="180">"180" - Leftward</option>
                <option value="0">"0" - Rightward</option>
                <option value="90">"90" - Upward</option>
                <option value="-90">"-90" - Downward</option>
              </Select>
            </div>
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-4 md:ml-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="podTyp">Task Type</Label>
              </div>
              <TextInput
                id="podTyp"
                type="text"
                sizing="md"
                value={podTyp}
                onChange={(e) => setPodTyp(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="taskCode">Task ID</Label>
              </div>
              <TextInput
                id="taskCode"
                type="text"
                sizing="md"
                value={taskCode}
                onChange={(e) => setTaskCode(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="agvCode">AMR ID</Label>
              </div>
              <TextInput
                id="agvCode"
                type="text"
                sizing="md"
                value={agvCode}
                onChange={(e) => setAgvCode(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="posCodePath">Rack moving pattern</Label>
              </div>
              <Textarea
                id="posCodePath"
                rows={10}
                value={posCodePath}
                onChange={(e) => setPosCodePath(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="pt-4 w-2/3">
          <Button type="submit">Submit</Button>
        </div>
        <SubmitAlert
          message={message}
          msgType={msgType}
          msgTimeout={msgTimeout}
        />
      </form>
    </article>
  );
}
