import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/greetings">
        Greetings
      </Link>

      <Link className="nav-menu__item" to="/new-greeting">
        Add Greeting
      </Link>
    </div>
  )
}

export default Nav
