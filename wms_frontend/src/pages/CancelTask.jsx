// src/pages/CancelTask.jsx
// --------------------------------------------------------
import { useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";
import { fetchCancelTask } from "../services/APIs";
import SubmitAlert from "../components/SubmitAlert.jsx";

export default function CancelTask() {
  const [reqCode, setReqCode] = useState("");
  const [reqTime, setReqTime] = useState("");
  const [agvCode, setAgvCode] = useState("");
  const [forceCancel, setForceCancel] = useState("0");
  const [taskCode, setTaskCode] = useState("");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [msgTimeout, setMsgTimeout] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      reqCode: reqCode,
      reqTime: reqTime,
      agvCode: agvCode,
      forceCancel: forceCancel,
      taskCode: taskCode,
    };
    console.log("Data", data);
    fetchCancelTask(data)
      .then((res) => {
        setMessage("Task canceled successfully!");
        setMsgType("success");
        setMsgTimeout(true);
        console.log("Response:", res);
        setTimeout(() => {
          setMsgTimeout(false);
        }, 3000);
      })
      .catch((err) => {
        setMessage("Task canceled unsuccessfully!");
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
      <title>Cancel Task</title>
      <h1 className="text-2xl font-bold mb-4">Cancel Task</h1>
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
            <Label htmlFor="agvCode">AMR ID</Label>
          </div>
          <TextInput
            id="agvCode"
            type="text"
            sizing="md"
            value={agvCode}
            onChange={(e) => setAgvCode(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="forceCancel">Force Cancel</Label>
          </div>
          <Select
            id="forceCancel"
            onChange={(e) => setForceCancel(e.target.value)}
            required
          >
            <option value="0">
              "0" - AMR puts down the rack at current location and its status
              turns to "idle"
            </option>
            <option value="1">
              "1" - AMR carries the rack and returns back, this mode is
              supported by LMR only
            </option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="taskCode">Task Code</Label>
          </div>
          <TextInput
            id="taskCode"
            type="text"
            sizing="md"
            value={taskCode}
            onChange={(e) => setTaskCode(e.target.value)}
          />
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
