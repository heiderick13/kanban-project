import "./Card.css";

import { BsTrash3 } from "react-icons/bs";

function Card({ content, handleDelete }) {
  return (
    <div className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        <span className="icon" onClick={handleDelete}>
          <BsTrash3 />
        </span>
      </div>
    </div>
  );
}

export default Card;
