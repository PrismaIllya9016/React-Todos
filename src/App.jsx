import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  //State functions

  const [newTask, setNewTask] = useState("");
  const [items, setItems] = useState([]);

  //Helper functions

  //Esta funcion adds a new task to the list of tasks
  function addTask() {
    //Esto revisa que no este vacio lo que se manda
    if (!newTask) {
      alert("Please enter a task");
      return;
    }

    //Esto revisa que no se mande nada que no sean letras y espacios

    if (!/^[a-zA-Z ]+$/.test(newTask)) {
      alert("Task must contain only letters and spaces");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setItems((oldTasks) => [...oldTasks, item]);

    setNewTask("");
    console.log(items);
  }

  //This function deletes a task from the list of tasks

  function deleteTask(id) {
    let newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function handleClickDone(id, status) {
    setItems((oldTasks) =>
      oldTasks.map((item) =>
        item.id === id ? { ...item, status: !status } : item
      )
    );
  }

  return (
    <div className="App">
      {/*1 Header */}
      <h1>Todo List</h1>

      {/*2 Input and Buttons */}
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="Add a task"
      />
      <button onClick={() => addTask()}>
        <i className="fa-light fa-plus"></i>
      </button>

      {/*3 List of items (sin ningun orden*/}

      {/* Aqui se lleva acabo el Display de las tareas y se anade un boton para eliminarlas mediante su ID*/}

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button
                onClick={() => handleClickDone(item.id,item.status)}
                className="done-button"
              >
                {item.status ? (
                  <i className="fa-regular fa-square-check"></i>  //Icono de completada
                ) : (
                  <i className="fa-regular fa-square"></i> //Icono de pendientes
                )}
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(item.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
