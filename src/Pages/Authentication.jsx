import React from "react";
import "./Authentication.css"

const Authentication = () => {
  return (
  <div className="login-signup">
    <div className="login-signup-container">
      <h1>Sign up </h1>
      <div className="login-signup-fields">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Your email adress"/>
        <input type="password" placeholder="Your password"/>
      </div>
      <button>
        Continue
      </button>
      <p className="already-have-account">
        Already have an account? <span>Login here</span>
      </p>
      <div className="login-signup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, I agree to the terms of use & policy.</p>
      </div>
    </div>
  </div>);
};

export default Authentication;
