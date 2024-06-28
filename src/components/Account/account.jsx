import { signIn } from "../../config/routes";
import "./account.css";
import { NavLink } from "react-router-dom";

function Account() {
  return (
    <NavLink className="header-nav" to={signIn}>
      <i className="fa fa-user-circle"></i>
      <p>Sign In</p>
    </NavLink>
  );
}

export default Account;
