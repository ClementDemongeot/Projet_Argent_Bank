import "./header.css";
import Logo from "./../../../assets/img/argentBankLogo.webp";
import Account from "../../Account/account";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" alt="Logo" src={Logo} />
        </Link>
        <Account />
      </div>
    </header>
  );
}

export default Header;
