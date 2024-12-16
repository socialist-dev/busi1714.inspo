// Cập nhật ngày tháng hôm nay
const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
document.getElementById('currentDate').innerHTML = `<p>${currentDate}</p>`;

// Hàm thêm công việc vào danh sách
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskNumber = taskList.children.length + 1;
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskNumber}. ${taskInput.value}</span>
        <button class="delete" onclick="deleteTask(this)">Complete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

// Hàm xóa công việc với hiệu ứng gạch chéo
function deleteTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector('.task-text');

    taskText.classList.add('crossed'); // Thêm hiệu ứng gạch ngang
    setTimeout(() => {
        li.remove();
        updateTaskNumbers();
    }, 1000);
}

// Cập nhật lại số thứ tự
function updateTaskNumbers() {
    const tasks = document.querySelectorAll('#taskList li .task-text');
    tasks.forEach((task, index) => {
        const taskContent = task.textContent.split('. ')[1];
        task.textContent = `${index + 1}. ${taskContent}`;
    });
}

// Xóa toàn bộ danh sách công việc
function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

// Thêm sự kiện nhấn Enter để thêm task
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});