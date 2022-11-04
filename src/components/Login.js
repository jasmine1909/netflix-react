import React, { useState } from "react";
import "./Login.css";
import Logo from ".././img/logo.png";
import SignInScreen from "./SignInScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={Logo} />

        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        {/* <img src="https://img.freepik.com/premium-vector/movie-film-banner-design-template-cinema-concept-with-popcorn-filmstrip-film-clapper_41737-249.jpg?w=2000" /> */}
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1> Unlimied films . TV programmes and more. </h1>
            <h2> Watch anywhere. Cancel at any time</h2>
            <h3>
              {" "}
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
