const API_URL = "http://localhost:3000/task";

function getAccessToken() {
    return localStorage.getItem("accessToken") || "";
}

function callAPI (endpoint, method = "GET", body = null) {
    return fetch(`${API_URL}${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null
    }).then(res => res.json());
}


 function fetchTasks() {
    return callAPI("/");
}

function addTask(name, status, priority, userId) {
    return callAPI("/", "POST", { name, status, priority, userId });
}

function updateTask(taskId, name, status, priority) {
    return callAPI(`/${taskId}`, "PATCH", { name, status, priority });
}

function deleteTask(taskId) {
    return callAPI(`/${taskId}`, "DELETE");
}

export {fetchTasks, addTask, updateTask, deleteTask};