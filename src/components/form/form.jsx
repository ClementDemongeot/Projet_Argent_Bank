import "./form.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailed,
  setLoginSuccessDispatchObject,
} from "../../redux/actions/auth.actions";
import { isValidEmail, isValidPassword } from "../validations/validation";
import { useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const reduxState = useSelector((state) => state);
  console.log(reduxState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email adress");
      return;
    }
    if (!isValidPassword(password)) {
      setErrorMessage("Invalid password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();

        const token = data.body.token;
        dispatch(setLoginSuccessDispatchObject(token));
        sessionStorage.setItem("token", token);

        if (rememberMe) {
          localStorage.setItem("token", token);
        }
        navigate("/profile-user");
      } else {
        const error = setErrorMessage("Incorrect email / password");
        dispatch(loginFailed(error));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="form-content">
      <i className="fa fa-user-circle form-icone"></i>
      <h2>Sign In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label-text" htmlFor="username">
            Username
          </label>
          <input
            className="input-text"
            id="username"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-container">
          <label className="label-text" htmlFor="password">
            Password
          </label>
          <input
            className="input-text"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label className="input-remember-label" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button className="sign-in-button-form">Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
}

export default Form;
