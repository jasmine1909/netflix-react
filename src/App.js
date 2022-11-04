import React, { useEffect } from "react";
import logo from "./logo.svg";

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { login, logout, selectUser } from "./features/counter/userSlice";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./components/ProfileScreen";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/profile" element={<ProfileScreen />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
