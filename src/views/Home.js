import React, { useEffect, useState } from 'react';
import TodoComponent from '../components/TodoComponent';
import getAll from '../services/todoListService';

function Home() {
  const [todosLists, setTodosLists] = useState([]);

  useEffect(() => {
    const listsFromStorage = getAll();
    setTodosLists(listsFromStorage);
  }, []);

  return (
    <div className="w-1/2 mx-auto">
      {todosLists.map((todosList) => (
        <div key={todosList.id}>
          <TodoComponent list={todosList} />
        </div>
      ))}
    </div>
  );
}

export default Home;
