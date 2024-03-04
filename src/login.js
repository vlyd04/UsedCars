import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function Login() {
  const Eye=<FontAwesomeIcon icon={faEye} />
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const[eye,setEye]=useState(false);


  const validate = () => {
    
    setEmailErr(!email); 
    setPasswordErr(!password); 
  };
  const toggleEye = () => {
    setEye(eye ? false : true);
  };

  return ( 
    <>
  
    <div className="bg-co" >
    <div className="bg">
      <h1>login page</h1>
    </div>
    <div className="container">
     <form>
        <label>E-mail:<FontAwesomeIcon icon={faEnvelope}/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailErr && <span>Email is required!</span>}
        </label>
        <div className="pass-wrapper">
        <label>Password:<FontAwesomeIcon icon={faLock} />
          <input type={eye ? "text" : "password"}  value={password} onChange={(e) => setPassword(e.target.value)} />
          <i className="e" onClick={toggleEye}>{Eye}</i>
          {passwordErr && <span>Password is required!</span>}
        </label>
        </div>
        <label>
          <button type="button" onClick={validate}>Log In</button>
        </label>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;



