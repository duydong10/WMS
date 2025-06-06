// src/pages/AgvCallback.jsx
// --------------------------------------------------------
import { useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";
import { fetchAgvCallback } from "../services/APIs";
import SubmitAlert from "../components/SubmitAlert.jsx";

export default function AgvCallback() {
  const [reqCode, setReqCode] = useState("");
  const [reqTime, setReqTime] = useState("");
  const [cooX, setCooX] = useState("");
  const [cooY, setCooY] = useState("");
  const [currentPosCode, setCurrentPosCode] = useState("");
  const [mapCode, setMapCode] = useState("");
  const [mapDataCode, setMapDataCode] = useState("");
  const [method, setMethod] = useState("");
  const [podCode, setPodCode] = useState("");
  const [podDir, setPodDir] = useState("");
  const [robotCode, setRobotCode] = useState("");
  const [taskCode, setTaskCode] = useState("");
  const [wbCode, setWbCode] = useState("");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [msgTimeout, setMsgTimeout] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      reqCode: reqCode,
      reqTime: reqTime,
      cooX: cooX,
      cooY: cooY,
      currentPositionCode: currentPosCode,
      mapCode: mapCode,
      mapDataCode: mapDataCode,
      method: method,
      podCode: podCode,
      podDir: podDir,
      robotCode: robotCode,
      taskCode: taskCode,
      wbCode: wbCode,
    };
    console.log("Data", data);
    fetchAgvCallback(data)
      .then((res) => {
        setMessage("AGV callback successfully!");
        setMsgType("success");
        setMsgTimeout(true);
        console.log("Response:", res);
        setTimeout(() => {
          setMsgTimeout(false);
        }, 3000);
      })
      .catch((err) => {
        setMessage("AGV callback unsuccessfully!");
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
      <title>AGV Callback</title>
      <h1 className="text-2xl font-bold mb-4">AGV Callback</h1>
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
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cooX">X-Coordinate</Label>
              </div>
              <TextInput
                id="cooX"
                type="text"
                sizing="md"
                value={cooX}
                onChange={(e) => setCooX(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cooY">Y-Coordinate</Label>
              </div>
              <TextInput
                id="cooY"
                type="text"
                sizing="md"
                value={cooY}
                onChange={(e) => setCooY(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="currentPosCode">Current Position ID</Label>
              </div>
              <TextInput
                id="currentPosCode"
                type="text"
                sizing="md"
                value={currentPosCode}
                onChange={(e) => setCurrentPosCode(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mapCode">Map ID</Label>
              </div>
              <TextInput
                id="mapCode"
                type="text"
                sizing="md"
                value={mapCode}
                onChange={(e) => setMapCode(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mapDataCode">Location Code on Map</Label>
              </div>
              <TextInput
                id="mapDataCode"
                type="text"
                sizing="md"
                value={mapDataCode}
                onChange={(e) => setMapDataCode(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/3 flex-col gap-4 md:ml-8">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="method">Task executing status</Label>
              </div>
              <Select
                id="method"
                onChange={(e) => setMethod(e.target.value)}
                required
              >
                <option value="">Select Method</option>
                <option value="start">"start" - Task started</option>
                <option value="outbin">"outbin" - Executing</option>
                <option value="end">"end" - Task completed</option>
                <option value="cancel">"cancel" - Cancel task</option>
              </Select>
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
            <div>
              <div className="mb-2 block">
                <Label htmlFor="robotCode">AMR ID</Label>
              </div>
              <TextInput
                id="robotCode"
                type="text"
                sizing="md"
                value={robotCode}
                onChange={(e) => setRobotCode(e.target.value)}
                required
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
                required
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
