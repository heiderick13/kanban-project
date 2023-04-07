import List from "../List/List";
import "./Board.css";

function Board({ tasks }) {
  return (
    <div className="board flex">
      <List tasks={tasks} name={"A Fazer"} todo={true} />
      <List tasks={tasks} name={"Fazendo"} />
      <List tasks={tasks} name={"Feito"} />
    </div>
  );
}

export default Board;
