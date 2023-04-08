import "./App.css";
import LoginScreen from "./components/LoginScr/LoginScreen";
import React, { createContext, useState } from "react";
import SignupScreen from "./components/SignupScreen/SignupScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { auth } from "./firebase-config";

export const fetch_usner_info = {
  email: auth?.currentUser?.email,
};

function App() {
  const [displayLogin, setDisplayLogin] = useState(false);

  const UserInfo = createContext();

  return (
    <div>
      <UserInfo.Provider value={fetch_usner_info}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Router>
      </UserInfo.Provider>
    </div>
  );
}

export default App;
