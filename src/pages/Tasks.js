import { fetchTasks, addTask, updateTask, deleteTask } from "./Api.js";
import "/src/assets/styles/task.css"

export default function Tasks() {
    return `
        <form id="addTaskForm">
            <input type="text" id="name" placeholder="Task Name" required />
            <select id="status" required>
                <option value="">Status</option>
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <select id="priority" required>
                <option value="">Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button type="submit">Add Task</button>
        </form>

        <!-- Lọc, sắp xếp -->
        <div class="filter-container">
            <input type="text" id="searchTask" placeholder="Search name..." />
            <select id="filterStatus">
                <option value="">All Status</option>
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            <select id="sortPriority">
                <option value="">Sort by Priority</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>

        <table id="taskTable">
            <tr>
                <th>name</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
        </table>
    `;
}

export function afterTasks() {
    const taskForm = document.querySelector("#addTaskForm");
    const taskTable = document.querySelector("#taskTable");
    const searchInput = document.querySelector("#searchTask");
    const filterStatus = document.querySelector("#filterStatus");
    const sortPriority = document.querySelector("#sortPriority");

    function renderTasks() {
        fetchTasks().then(tasks => {
            let filteredTasks = tasks;

            // Lọc theo Status
            const selectedStatus = filterStatus.value;
            if (selectedStatus) {
                filteredTasks = filteredTasks.filter(task => task.status === selectedStatus);
            }

            // Tìm kiếm theo Name
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm) {
                filteredTasks = filteredTasks.filter(task => task.name.toLowerCase().includes(searchTerm));
            }

            // Sắp xếp theo Priority
            const sortOrder = sortPriority.value;
            if (sortOrder === "asc") {
                filteredTasks.sort((a, b) => a.priority - b.priority);
            } else if (sortOrder === "desc") {
                filteredTasks.sort((a, b) => b.priority - a.priority);
            }

            // Hiển thị danh sách Task
            taskTable.innerHTML = `
                <tr>
                    <th>name</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            `;
            filteredTasks.forEach(task => {
                taskTable.innerHTML += `
                    <tr>
                        <td>${task.name}</td>
                        <td>${task.status}</td>
                        <td>${task.priority}</td>
                        <td>
                            <button class="update-btn" data-id="${task.id}">Update</button>
                            <button class="delete-btn" data-id="${task.id}">Delete</button>
                        </td>
                    </tr>`;
            });

            // Gán sự kiện cho nút Update
            document.querySelectorAll(".update-btn").forEach(button => {
                button.addEventListener("click", () => {
                    const taskId = button.getAttribute("data-id");
                    const task = tasks.find(t => t.id === taskId);
                    if (task) {
                        document.querySelector("#name").value = task.name;
                        document.querySelector("#status").value = task.status;
                        document.querySelector("#priority").value = task.priority;
                        
                        // Khi bấm Update, cập nhật lại task
                        taskForm.onsubmit = (e) => {
                            e.preventDefault();
                            const newname = document.querySelector("#name").value;
                            const newStatus = document.querySelector("#status").value;
                            const newPriority = document.querySelector("#priority").value;

                            updateTask(taskId, newname, newStatus,newPriority).then(() => {
                                taskForm.reset();
                                renderTasks();
                            });
                        };
                    }
                });
            });

            // Gán sự kiện cho nút Delete
            document.querySelectorAll(".delete-btn").forEach(button => {
                button.addEventListener("click", () => {
                    const taskId = button.getAttribute("data-id");
                    if (confirm("Bạn có muốn xóa task này?")) {
                        deleteTask(taskId).then(() => renderTasks());
                    }
                });
            });
        })
        .catch(error => console.error("Error:", error));
    }

    // Xử lý thêm Task
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const status = document.querySelector("#status").value;
        const priority = document.querySelector("#priority").value;

        addTask(name, status, parseInt(priority)).then(() => {
            taskForm.reset();
            renderTasks();
        });
    });

    // Lắng nghe sự kiện tìm kiếm, lọc, sắp xếp
    searchInput.addEventListener("input", renderTasks);
    filterStatus.addEventListener("change", renderTasks);
    sortPriority.addEventListener("change", renderTasks);

    renderTasks();
}
