const form = document.querySelector('#task-form');


form.addEventListener('submit', function (e) {

    const taskInput = document.querySelector('#task');

    if (taskInput.value === '') {

        alert('Add a task');
    }

    else {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"> </i>';
        li.appendChild(link);
        const taskList = document.querySelector('.collection');
        taskList.appendChild(li);

        taskInput.value = '';

    }
    e.preventDefault();
})


const taskList = document.querySelector('.collection');

taskList.addEventListener('click', removeTask);

function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {

        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }

    }



}




const filter = document.querySelector('#filter');

filter.addEventListener('keyup', filterTasks);

function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {

        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';

        }

        else {

            task.style.display = 'none';

        }


    });





}



const clearBtn = document.querySelector('.clear-tasks');

clearBtn.addEventListener('click', clearTasks);

function clearTasks() {

    const taskList = document.querySelector('.collection');

    taskList.innerHTML = '';
}