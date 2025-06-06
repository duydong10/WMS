// src/pages/ContinueTask.jsx
// --------------------------------------------------------
import { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { fetchContinueTask } from "../services/APIs";
import SubmitAlert from "../components/SubmitAlert.jsx";

export default function ContinueTask() {
  const [reqCode, setReqCode] = useState("");
  const [reqTime, setReqTime] = useState("");
  const [wbCode, setWbCode] = useState("");
  const [podCode, setPodCode] = useState("");
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
      wbCode: wbCode,
      podCode: podCode,
      agvCode: agvCode,
      taskCode: taskCode,
    };
    console.log("Data", data);
    fetchContinueTask(data)
      .then((res) => {
        setMessage("Task continued successfully!");
        setMsgType("success");
        setMsgTimeout(true);
        console.log("Response:", res);
        setTimeout(() => {
          setMsgTimeout(false);
        }, 3000);
      })
      .catch((err) => {
        setMessage("Task continued unsuccessfully!");
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
      <title>Continue Task</title>
      <h1 className="text-2xl font-bold mb-4">Continue Task</h1>
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
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-4 md:ml-8">
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
