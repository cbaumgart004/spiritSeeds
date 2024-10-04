import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          {/* <li className="mx-1">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/Calendar">Calendar</Link>
          </li> */}
          <li className="mx-1">
            <Link to="/merch">Merch</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          {/* <li className="mx-1">
          <Link to="/Home">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/Calendar">Calendar</Link>
        </li> */}
          <li className="mx-1">
            <Link to="/Merch">Merch</Link>
          </li>
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          Spirit Seeds
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
