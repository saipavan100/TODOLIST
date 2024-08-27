document.getElementById('add-btn').addEventListener('click', function() {
    const taskText = document.getElementById('todo-input').value;

    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(removeBtn);

        document.getElementById('todo-list').appendChild(li);

        document.getElementById('todo-input').value = '';
    }
});
