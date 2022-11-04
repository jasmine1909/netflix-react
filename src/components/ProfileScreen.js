import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import Nav from "./Nav";
import { auth } from "../firebase";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Your Profile</h1>
        <div className="profileScreen__info">
          <img src="https://static.scistarter.org/img/nobody.png" />
          <div className="profileScreen__details">
            <div className="profileScreen__plans">
              <h3>Your Profile </h3>
              <div>
                <div className="profileScreen__item">
                  <h2>Email:</h2>
                  <h2>{user.email}</h2>
                </div>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                {" "}
                Sign Out{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
