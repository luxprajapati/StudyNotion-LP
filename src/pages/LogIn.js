import React from "react";
import Template from "../components/Template";
import login from "../assets/login.png";

const LogIn = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desp1="Build skills for today, tommorrow & beyond!"
      desp2="Education to future-proof your career"
      image={login}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  );
};

export default LogIn;
