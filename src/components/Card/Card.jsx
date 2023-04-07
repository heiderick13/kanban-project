import "./Card.css";

function Card({ content }) {
  return (
    <div className="card" draggable="true">
      <div className="card-header">
        <div className="label"></div>
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
