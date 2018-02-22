
// List functions needed
// displayTodo() addTodo();
// deleteTodo(); changeTodo();
//
let input = document.getElementById('input'); // refers to input form
let liList = document.getElementById('ul'); // place where new Lis stack


document.getElementById('add_todo').onclick = function() {
  let el = document.createElement('li'); // <li>
  el.innerText = input.value;
  input.value = '';
  liList.appendChild(el);

  console.log(input.value);
}

// This is my groups code
// var input = document.getElementById('input');
// var li = document.getElementById('ul')
//
// document.getElementById('add_todo').onclick = function() {
//   let el = document.createElement('li');
//   el.innerText = input.value;
//   input.value = '';
//   li[0].appendChild(el);
//
//   console.log(input.value)
// }


// my attempt to edit their code
// document.getElementById('add_todo').onclick = function() {
//   let el = document.createElement('li'); // <li>
//   el.innerText = input.value;
//   input.value = '';
//   liList[0].appendChild(el);
//
//   console.log(input.value);
// }
