import React, { useState, useRef } from "react";
import "./signup-screen.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config"
import { useNavigate } from 'react-router-dom'

const SignupScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErr, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let errMsgRef = useRef()
  const navigate = useNavigate()

  const handleSingup = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          setErrorMessage("")
          const user = userCredential.user;
          console.log("user", user);
          navigate('/login')
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.error("err", error.message);
          setErrorMessage(error.message);
          setShowError(true);
          console.log(error.message);
          // ..
        });
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
      setErrorMessage(true);
    }
  };

  const refHandle = () => {
   let errClose = document.getElementById('errClose')

    console.log(errClose.style.display)
  };

  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={handleSingup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={errorMessage !== ""}
            />
          </div>
          {/* ERROR MSG */}
          {errorMessage !== "" ? (
            <div className="error">
              <span
                className="closebtn"
                ref={errMsgRef}
                onClick={refHandle}
                id="errClose"
                // onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {errorMessage}
            </div>
          ) : null}
          
          {/* END ERROR MSG */}
          <button
            type="submit"
            style={errorMessage === "" ? null : { background: "red" }}
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupScreen;
