import React from 'react';
import { useParams } from 'react-router-dom';

function EditTodo() {
  const params = useParams();
  return (
    <div className="App">
      <p>
        Todo:
        {params.todoId}
      </p>
    </div>
  );
}

export default EditTodo;
