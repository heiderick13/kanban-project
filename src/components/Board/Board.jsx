import List from "../List/List";
import "./Board.css";

function Board({ tasks, handleDelete }) {
  return (
    <div className="board flex">
      <List
        tasks={tasks}
        name={"A Fazer"}
        todo={true}
        handleDelete={handleDelete}
      />
      <List tasks={tasks} name={"Fazendo"} handleDelete={handleDelete} />
      <List tasks={tasks} name={"Feito"} handleDelete={handleDelete} />
    </div>
  );
}

export default Board;
