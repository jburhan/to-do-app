function onReady(){
  const toDos = [];
  //this is to access the HTML page
  const addToDoForm = document.getElementById('addToDoForm');

  // this is to update the array
  function createNewToDo () {
    // This is access the  text input
    const newToDoText = document.getElementById('newToDoText');
    //if empty string is put in, it should return false
    if (!newToDoText) { return };

    // This is to add new to-do to the ToDos aray
    toDos.push({
      title : newToDoText.value,
      complete: false
    });
    // this is to clear out the input box after each input
    newToDoText.value = '';

    renderTheUI(toDos);

  };

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    // this is to set a new list to an empty string
    toDoList.textContent = '';

    //this takes a function an apply it on each item in the array
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;

      // appendChild is used to attach an element to the list
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      // to create a button, use this
      const delli = document.createElement('button');

      //delli is the var of the button, 'delete' is just the id of the button
      delli.id = 'delete';

      //textContent is the content of this button, this name the button as 'Delete'
      delli.textContent = 'Delete';
      newLi.appendChild(delli);

      delli.addEventListener('click', event =>{
        event.preventDefault();
        toDoList.removeChild(newLi);

        // this is to take off the erased list
        const index = toDos.indexOf(toDoList.newLi);
        toDos.splice(index, 1);

      });

    });

  };
  //this is to add event listener
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();

  });

  renderTheUI(toDos);




};


window.onload = function() {
  onReady();

};
