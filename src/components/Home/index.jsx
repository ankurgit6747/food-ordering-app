import React, { useContext, useState } from 'react';
import { auth } from "../../firebase-config";
import { fetch_usner_info } from '../../App';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const index = () => {
  const userLogin = auth.currentUser;
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  // let userEmail = useContext(UserInfo)
  console.log("user", user);

  const logoutBtn = async () => {
    await signOut(auth)
    navigate('/login')
  }


  return (
    <div>
      <Header />
      <h3>{user?.email}</h3>
      <button onClick={logoutBtn}>Sign out</button>
    </div>
  );
}

export default index