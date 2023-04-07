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
        <h1>Minhas tarefas</h1>
        <span className="icon">
          <BiPencil />
        </span>

        <form>
          <input ref={taskNameRef} type="text" />
          <button onClick={handleAddTask} className="add-btn" type="submit">
            <MdAdd size={24} color="#FEFEFE" />
          </button>
        </form>
      </header>
      <Board tasks={tasks} />
    </div>
  );
}

export default App;
