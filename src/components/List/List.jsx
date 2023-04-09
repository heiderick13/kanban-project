import Card from "../Card/Card";
import "./List.css";

function List({ name, array, handleDelete, handleForwardTask }) {
  return (
    <div className="list">
      <div className="list-header flex">
        <h2 className="list-name">{name}</h2>
      </div>
      <ul className="tasks">
        {array.length > 0 &&
          array.map((task) => {
            return (
              <Card
                id={task.id}
                key={task.id}
                content={task.name}
                status={task.status}
                handleDelete={handleDelete}
                handleForwardTask={handleForwardTask}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default List;
