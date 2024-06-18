function addTask(period) {
    let taskInput, taskList;
    
    if (period === 'morning') {
        taskInput = document.getElementById('morning-input');
        taskList = document.getElementById('morning-list');
    } else if (period === 'night') {
        taskInput = document.getElementById('night-input');
        taskList = document.getElementById('night-list');
    }

    if (taskInput.value.trim() !== "") {
        // Cria um novo item de lista
        const newTask = document.createElement('li');
        newTask.innerHTML = `<strong>${taskInput.value}</strong> <button onclick="removeTask(this)">Remove</button>`;
        
        // Adiciona o novo item de lista à lista de tarefas
        taskList.appendChild(newTask);
        
        // Limpa o campo de entrada
        taskInput.value = "";
    }
}

// Função para remover tarefas
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}