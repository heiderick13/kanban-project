import List from "../List/List";
import "./Board.css";

function Board() {
  return (
    <div className="board flex">
      <List name={"A Fazer"} button={true} />
      <List name={"Fazendo"} />
      <List name={"Feito"} />
    </div>
  );
}

export default Board;
