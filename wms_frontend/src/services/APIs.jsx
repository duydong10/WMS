// src//services/APIs.jsx
// --------------------------------------------------------


export async function fetchCreateTask(data) {
    const res = await fetch("http://192.168.68.103:5000/agv/create_task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return res.json();
}

export async function fetchCancelTask(data) {
    const res = await fetch("/agv/cancel_task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export async function fetchAgvCallback(data) {
    const res = await fetch("/agv/callback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export async function fetchResumeRobot(data) {
    const res = await fetch("/agv/resume_robot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export async function fetchStopRobot(data) {
    const res = await fetch("/agv/stop_robot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}