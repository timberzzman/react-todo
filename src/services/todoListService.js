export default function getAll() {
  return JSON.parse(localStorage.getItem('todosList'));
}

export function getList(id) {
  const lists = getAll();
  return lists.find((list) => list.id === id);
}

export function createList(newList) {
  let todosList = getAll();
  if (!todosList) {
    todosList = [];
  }
  todosList.push(newList);
  localStorage.setItem('todosList', JSON.stringify(todosList));
}
