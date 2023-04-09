import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase-config";
import { fetch_usner_info } from '../../App';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_user } from '../../features/slices/userSlice';

const index = () => {
  const userLogin = auth.currentUser;
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const dispatch = useDispatch()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    dispatch(fetch_user(currentUser))
  })

  let uu = useSelector((state) => state )

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