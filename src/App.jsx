import { useState, useRef, useEffect } from "react";

import { BiPencil } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

import Board from "./components/Board/Board";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  function handleAddTask(e) {
    e.preventDefault();
    const name = taskNameRef.current.value;
    if (name === "") return;

    setTasks((prevTasks) => {
      return [...prevTasks, { id: Date.now(), name: name }];
    });
    taskNameRef.current.value = "";
  }

  function handleDelete(e) {
    e.preventDefault();

    const targetId = e.target.parentElement.parentElement.id;

    const updatedTasks = tasks.filter((task) => task.id != targetId);
    console.log(updatedTasks);
    console.log(e.target.parentElement.parentElement.id);

    setTasks(updatedTasks);
    localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("localTasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <header>
        <div className="head-title flex">
          <h1>Minhas tarefas</h1>
          <BiPencil className="icon" />
        </div>

        <form className="flex">
          <input ref={taskNameRef} className="new-task" type="text" />
          <button onClick={handleAddTask} className="add-btn" type="submit">
            <MdAdd size={24} color="#7c3bed" />
          </button>
        </form>
      </header>
      <Board tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
