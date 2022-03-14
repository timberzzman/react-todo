import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSortable } from 'react-sortablejs';
import { v4 as uuidv4 } from 'uuid';
import { createList } from '../services/todoListService';

function AddTodoView() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([{
    id: uuidv4(),
    title: 'todo1',
    checked: false,
  }]);
  const [title, setTitle] = useState('');

  function addTodo() {
    const result = {
      id: uuidv4(),
      title: 'New Todo',
      checked: false,
    };
    setTodos((oldTodos) => [...oldTodos, result]);
  }

  function updateTodo(id, value) {
    let todosList = todos;

    todosList = todosList.map((todo) => {
      const result = todo;
      if (todo.id === id) {
        result.title = value;
        return result;
      }
      return todo;
    });
    setTodos(todosList);
  }

  function deleteTodo(id) {
    let todosList = todos;

    todosList = todosList.filter((todo) => todo.id !== id);
    setTodos(todosList);
  }

  function saveList() {
    const list = {
      id: uuidv4(),
      title,
      todos,
    };
    createList(list);
    navigate('/');
  }

  return (
    <div className="mx-auto w-2/4">
      <h1>Add a list</h1>
      <form className="mt-5">
        <div className="w-full flex flex-col lg:mr-16 lg:py-0 py-4">
          <label htmlFor="titleInput" className="text-md tracking-normal mb-3">
            List title
            <input
              type="text"
              id="titleInput"
              className="w-full text-gray-600 focus:outline-none font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        <p className="text-md mb-1">Todos</p>
        <ReactSortable
          className="w-full"
          group="groupName"
          animation={200}
          delayOnTouchStart
          delay={2}
          list={todos}
          setList={setTodos}
          handle=".my-handle"
        >
          {todos.map((todo) => (
            <div key={todo.id} className="mb-2 flex content-center">
              <i className="my-auto flex-none fa-solid fa-grip-lines my-handle pr-4" />
              <input
                className="grow text-gray-600 focus:outline-none font-normal h-10 pl-3 border-gray-300 rounded border shadow"
                value={todo.title}
                onChange={(event) => updateTodo(todo.id, event.target.value)}
              />
              <button type="button" className="flex-none ml-2 py-2 px-3 bg-red-600 rounded" onClick={() => deleteTodo(todo.id)}>
                <i className="fa-solid fa-trash" />
              </button>
            </div>
          ))}
        </ReactSortable>
        <div className="w-full flex justify-between">
          <button type="button" className="bg-blue-400 py-2 px-3 rounded" onClick={addTodo}>Add a todo</button>
          <button type="button" className="bg-green-400 py-2 px-3 rounded" onClick={saveList}>Save list</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoView;
