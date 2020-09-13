import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="./">
        <img
          className="login__logo"
          src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign in</button>
        </form>

        <p>
          By Signin-in you are going to be awesome! By Signin-in you are going
          to be awesome! By Signin-in you are going to be awesome! By Signin-in
          you are going to be awesome!
        </p>
        <button className="login__registerButton">Create your account</button>
      </div>
    </div>
  );
}

export default Login;
