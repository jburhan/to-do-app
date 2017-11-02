function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');



  addToDoForm.addEventListener( 'submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    const delToDo = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    delToDo.id = "delToDo";

    delToDo.textContent = "Delete";

    newLi.appendChild(delToDo);




    delToDo.addEventListener( 'click', event => {
      event.preventDefault();
        toDoList.removeChild(newLi);

    });

  });

}


window.onload = function() {
  onReady();
}
