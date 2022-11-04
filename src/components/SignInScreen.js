import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";

const SignInScreen = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          {" "}
          New to Cinema ?{" "}
          <span className=".signinScreen__link" onClick={register}>
            {" "}
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
