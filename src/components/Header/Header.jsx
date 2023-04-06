import "./Header.css";

import { BiPencil } from "react-icons/bi";

function Header() {
  return (
    <header>
      <h1>Minhas tarefas</h1>
      <span className="icon">
        <BiPencil />
      </span>
    </header>
  );
}

export default Header;
