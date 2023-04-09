import "./Card.css";

import { BsTrash3 } from "react-icons/bs";
import { MdOutlineArrowCircleRight } from "react-icons/md";

function Card({ id, content, status, handleDelete, handleForwardTask }) {
  return (
    <div id={id} className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
        <MdOutlineArrowCircleRight
          id={status}
          className="icon right"
          onClick={handleForwardTask}
        />
        <BsTrash3 className="icon" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Card;
