import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserAction } from "../redux/actions";

export default function Login() {
  
  const handleSubmit = (username, password) => {
    console.log(username, password);
  };
  return (
    <div className="login">
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
}

function RegistrationForm({ onSubmit }) {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEnable, setEnable] = useState(true);
  const handleKeyUp = () => {
    if (username.length > 0 && password.length > 0) setEnable(false);
    else setEnable(true);
  };
  return (
    <>
   
   <div className="loginflex">
   <div><img className='loginlogo' src="navlogo.png" alt="logo" /></div>
     <div><div className="logincontainer">
   
    <h3 className="logintitle">Log in</h3>
      <label>Username</label>
      <input
        type="text"
        id="username-input"
        placeholder="username"
        value={username}
        onKeyUp={handleKeyUp}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        onKeyUp={handleKeyUp}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <Link to="/">
      <button
        type="submit"
        id="button-input"
        disabled={isEnable}
        onClick={() => dispatch(saveUserAction(username))}
      >
        Login
      </button>
      </Link>
    </div>
    </div> 
    </div>  
    </>
  );
}
