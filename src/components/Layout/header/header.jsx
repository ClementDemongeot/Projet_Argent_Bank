import "./header.css";
import Logo from "./../../../assets/img/argentBankLogo.webp";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { base, profileUser, signIn } from "../../../config/routes";

function Header() {
  const isConnected = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate(base);
  };
  return (
    <header>
      <div className="header-container">
        <Link to={base}>
          <img className="header-logo" alt="Logo" src={Logo} />
        </Link>
        {isConnected ? (
          <div className="header-nav-connected">
            <Link className="header-nav-connected" to={profileUser}>
              <i className="fa fa-user-circle" />
              <p>{username}</p>
            </Link>
            <Link
              className="header-nav-connected"
              to={base}
              onClick={logoutHandler}
            >
              <i className="fa fa-sign-out" />
              <p> Sign out </p>
            </Link>
          </div>
        ) : (
          <Link className="header-nav-not-connected" to={signIn}>
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
