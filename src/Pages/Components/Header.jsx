import { Link } from "react-router-dom";
import "../Components/Header.css";
function Header() {
  return (
    <header style={{ width: "100%" }}>
      <div class="logo">logo</div>
      <div class="button-content">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
