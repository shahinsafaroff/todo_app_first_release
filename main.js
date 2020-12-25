(function() {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }
function createToDoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Add your next TODO name here';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Add TODO';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return { 
         form,
         input,
         button,
    };
    }
function createToDoList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
    }

document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('todo-app');

    let toDoAppTitle = createAppTitle('List of TODOs');
    let toDoItemForm = createToDoItemForm();
    let toDolist = createToDoList();

    container.append(toDoAppTitle);
    container.append(toDoItemForm.form);
    container.append(toDolist);
    });

function createToDoItem(name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Done';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Remove';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
        item,
        doneButton,
        deleteButton,
    };
}

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let toDoAppTitle = createAppTitle('Works List');
        let toDoItemForm = createToDoItemForm();
        let toDolist = createToDoList();


        container.append(toDoAppTitle);
        container.append(toDoItemForm.form);
        container.append(toDolist);

        toDoItemForm.form.addEventListener('Submit', function(e){
            e.preventDefault();
            if (!toDoItemForm.input.value) {
                return;
            }

            let toDoItem = createToDoItem(toDoItemForm.input.value);

            toDoItem.doneButton.addEventListener('click', function(){
                toDoItem.item.classList.toggle('list-group-item-success');
            });

            toDoItem.deleteButton.addEventListener('click', function(){
                if (confirm('Are you sure?')) {
                    toDoItem.item.remove();
                }
            });

            toDolist.append(toDoItem.item);

            toDoItemForm.input.value = '';        
        });
    });
})();