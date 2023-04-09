import React, {useState} from 'react';
import "./login-screen.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // signin user
          navigate('/')
          console.log("user", user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log("error", error.message)
    }

    // TODO: call your API to authenticate the user
    // if successful, redirect to the dashboard page
    // history.push("/dashboard");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );

}
export default LoginScreen;