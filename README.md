# To-Do-list-With-Redux

# Vamos a crear el proyecto con Vite, seguimos estos pasos:

- Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la última versión desde su sitio web oficial: https://nodejs.org/en/download/.
- Abre una terminal o línea de comandos y ejecuta el siguiente comando para instalar Vite: npm create vite@latest
- Ejecuta el siguiente comando para instalar las dependencias necesarias: npm install react react-dom redux react-redux

# Crea un archivo llamado index.html con el siguiente contenido:

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Lista de Tareas</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.js"></script>
  </body>
</html>

## En este archivo, hemos agregado un script con la etiqueta type="module", que indica que es un módulo ES6. Luego, hemos enlazado este archivo con el archivo JavaScript de nuestro proyecto.

# Crea una carpeta llamada src y dentro de ella crea un archivo llamado index.js con el siguiente contenido:

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import tasksReducer from './reducers/tasks';

const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

## En este archivo, hemos importado las bibliotecas necesarias de Redux y React, así como también nuestros componentes y reductor. Luego, hemos creado una instancia de la tienda Redux 
y utilizado el componente Provider para proporcionar esta tienda a nuestra aplicación React. Finalmente, hemos renderizado nuestra aplicación React en el contenedor #root en el archivo HTML.

# Crea una carpeta llamada reducers y dentro de ella crea un archivo llamado tasks.js con el siguiente contenido:

const initialState = {
  tasks: [],
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default tasksReducer;

## En este archivo, hemos creado nuestro reductor que maneja el estado de nuestras tareas. Este reductor se encarga de dos acciones: ADD_TASK y REMOVE_TASK.

# Crea una carpeta llamada components y dentro de ella crea un archivo llamado App.js con el siguiente contenido:

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

## En este archivo, hemos creado nuestro componente de aplicación. Este componente maneja la lista de tareas y la entrada de texto para agregar nuevas tareas. 
También se encarga de llamar a nuestras acciones para agregar o eliminar tareas.

# Crea una carpeta llamada actions y dentro de ella crea un archivo llamado tasks.js con el siguiente contenido:

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  payload: task,
});

## En este archivo, hemos creado nuestras acciones que se utilizan para agregar o eliminar tareas.

# EJECUTA npm run dev Y PRUEBA TU APP DE TAREAS :D
