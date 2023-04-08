import Card from "../Card/Card";
import "./List.css";

function List({ name, tasks, todo, handleDelete }) {
  return (
    <div className="list">
      <div className="list-header flex">
        <h2 className="list-name">{name}</h2>
      </div>
      {todo && (
        <ul className="tasks">
          {tasks.map((task) => {
            return (
              <Card
                id={task.id}
                key={task.id}
                content={task.name}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default List;
