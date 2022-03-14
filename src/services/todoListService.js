export default function getAll() {
  return JSON.parse(localStorage.getItem('todosList'));
}

export function getList(id) {
  console.log(id);
}

export function setList(id, newValue) {
  console.log(id, newValue);
}

export function createList(newList) {
  let todosList = getAll();
  if (!todosList) {
    todosList = [];
  }
  todosList.push(newList);
  localStorage.setItem('todosList', JSON.stringify(todosList));
}
