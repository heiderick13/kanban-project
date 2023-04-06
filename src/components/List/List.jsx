import Card from "../Card/Card";
import "./List.css";

import { MdAdd } from "react-icons/md";

function List({ name, button }) {
  return (
    <div className="list">
      <div className="list-header flex">
        <h2 className="list-name">{name}</h2>
        {button && (
          <button className="add-btn">
            <MdAdd size={24} color="#FEFEFE" />
          </button>
        )}
      </div>
      <ul className="tasks">
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}

export default List;
