import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';


function SignIn() {
    const navigate = useNavigate();
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const Eye = <FontAwesomeIcon icon={faEye} />
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [confirmPwdErr, setConfirmPwdErr] = useState(false);
    const [eye, setEye] = useState(false);
    const [confirmEye, setConfirmEye] = useState(false);

    const validate = () => {
        let isEmailValid = validEmail.test(email);
        let isPasswordValid = validPassword.test(password);
        let doPasswordsMatch = confirmPassword === password && confirmPassword !== null;

        setEmailErr(!isEmailValid);
        setPasswordErr(!isPasswordValid);
        setConfirmPwdErr(!doPasswordsMatch);

        if (isEmailValid && isPasswordValid && doPasswordsMatch) {
            navigate('/signup');
        }
    };

    const toggleEye = () => {
        setEye(eye ? false : true);
    };
    const toggleConfirmEye = () => {
        setConfirmEye(confirmEye ? false : true);
    }






    return (
        <>
            <div className="bg-co">
            <div className="bg">
                <h1>sign-up page</h1>
            </div>
            <div className="container">
                <form>
                    <label>E-mail: <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailErr && <span>Enter Valid Email Id!</span>}
                    </label>
                    <div className="pass-wrapper">
                        <label>Password:<FontAwesomeIcon icon={faLock} />
                            <span class="password-toggle-icon"><i class="fas fa-eye"></i></span>
                            <input value={password} type={eye ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                            <i className="e" onClick={toggleEye}>{Eye}</i>
                            {passwordErr && <span>Enter Valid Password!
                                <ul>
                                    <li>minimum length must be 6 characters </li>
                                </ul>
                            </span>
                            }
                        </label>
                    </div>
                    <div className="pass-wrapper">
                        <label>Confirm Password:<FontAwesomeIcon icon={faSquareCheck} />
                            <input type={confirmEye ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <i className="e" onClick={toggleConfirmEye}>{Eye}</i>
                            {confirmPwdErr && <span>Passwords do not match</span>}
                        </label>
                    </div>
                    <label>
                        <button type="button" onClick={validate}>Sign In</button>
                    </label>
                </form>
            </div>
            </div>
        </>
    )
};

export default SignIn;