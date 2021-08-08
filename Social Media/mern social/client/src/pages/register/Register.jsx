import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value != password.current.value) {
      passwordAgain.current.setCustomValidity("Password doesn't matched!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with everybody on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Enter a Username"
              required
              ref={username}
              type="text"
              className="loginInput"
            />
            <input
              placeholder="Enter your Email-Id"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Enter a new Password"
              required
              ref={password}
              type="password"
              className="loginInput"
              minLength="6"
            />
            <input
              placeholder="Confirm your Password"
              required
              ref={passwordAgain}
              type="password"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" type="submit">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
