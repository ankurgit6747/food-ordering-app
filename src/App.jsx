import "./App.css";
import LoginScreen from "./components/LoginScr/LoginScreen";
import React, { useState } from "react";
import SignupScreen from "./components/SignupScreen/SignupScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { auth } from "./firebase-config";

export const fetch_usner_info = {
  email: auth?.currentUser?.email,
};

function App() {
  const [displayLogin, setDisplayLogin] = useState(false);


  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
