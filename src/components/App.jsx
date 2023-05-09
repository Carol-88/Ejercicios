import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from '../actions/tasks';

function App({ tasks, addTask, removeTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    addTask({ id: Date.now(), title: inputValue });
    setInputValue('');
  };

  const handleRemoveTask = (task) => {
    removeTask(task);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleRemoveTask(task)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
