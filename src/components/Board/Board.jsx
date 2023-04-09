import List from "../List/List";
import "./Board.css";

function Board({
  tasks,
  currentTasks,
  doneTasks,
  handleDelete,
  handleForwardTask,
}) {
  return (
    <div className="board flex">
      <List
        array={tasks}
        name={"A Fazer"}
        handleDelete={handleDelete}
        handleForwardTask={handleForwardTask}
      />
      <List
        array={currentTasks}
        name={"Fazendo"}
        handleDelete={handleDelete}
        handleForwardTask={handleForwardTask}
      />
      <List
        array={doneTasks}
        name={"Feito"}
        handleDelete={handleDelete}
        handleForwardTask={handleForwardTask}
      />
    </div>
  );
}

export default Board;
