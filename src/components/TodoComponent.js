/* eslint-disable react/prop-types */
import React from 'react';

function TodoComponent({ list }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-3">
      <div className="px-4 py-5 sm:px-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">{list.title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{list.id}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pb-2">
        <dl>
          {list.todos.map((todo) => (
            <div className="px-4 pt-2 sm:gap-4 sm:px-6" key={todo.id}>
              <p>{todo.title}</p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default TodoComponent;
