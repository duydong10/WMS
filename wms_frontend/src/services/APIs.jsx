// src//services/APIs.jsx
// --------------------------------------------------------

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem("jwtToken");
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };
  const res = await fetch(url, { ...options, headers });
  if (res.status === 401) {
    localStorage.removeItem("jwtToken");
    window.location.href = "/login";
    return;
  }
  return res;
}

export async function fetchLogin(data) {
  const res = await fetch("http://192.168.3.69:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  if (response.token) {
    localStorage.setItem("jwtToken", response.token);
  }
  return response;
}

export async function fetchChangePassword(data) {
  const res = await fetchWithAuth("http://192.168.3.69:5000/change_password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchCreateTask(data) {
  const res = await fetchWithAuth("http://192.168.3.69:5000/agv/create_task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchCancelTask(data) {
  const res = await fetchWithAuth("http://192.168.3.69:5000/agv/cancel_task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchAgvCallback(data) {
  const res = await fetchWithAuth("http://192.168.3.69:5000/agv/agv_callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchContinueTask(data) {
  const res = await fetchWithAuth(
    "http://192.168.3.69:5000/agv/continue_task",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}

// export async function fetchResumeRobot(data) {
//     const res = fetchWithAuth("/agv/resume_robot", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
// }

// export async function fetchStopRobot(data) {
//     const res = fetchWithAuth("/agv/stop_robot", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })
// }
