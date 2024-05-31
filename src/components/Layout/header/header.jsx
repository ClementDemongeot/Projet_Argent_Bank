import "./header.css";
import Logo from "./../../../assets/img/argentBankLogo.webp";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/auth.actions";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const isConnected = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" alt="Logo" src={Logo} />
        </Link>
        {isConnected ? (
          <div className="header-nav-connected">
            <Link className="header-nav-connected" to="/profile-user">
              <i className="fa fa-user-circle" />
              <p>{username}</p>
            </Link>
            <Link
              className="header-nav-connected"
              to="/"
              onClick={logoutHandler}
            >
              <i className="fa fa-sign-out" />
              <p> Sign out </p>
            </Link>
          </div>
        ) : (
          <Link className="header-nav-not-connected" to="/signin">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
