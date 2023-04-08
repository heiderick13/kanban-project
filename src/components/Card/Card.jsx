import "./Card.css";

import { BsTrash3 } from "react-icons/bs";

function Card({ id, content, handleDelete }) {
  return (
    <div id={id} className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {/* <span className="icon" onClick={handleDelete}> */}
        <BsTrash3 className="icon" onClick={handleDelete} />
        {/* </span> */}
      </div>
    </div>
  );
}

export default Card;
