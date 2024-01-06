import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";
const SignUp = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desp1="Build skills for today, tommorrow & beyond!"
      desp2="Education to future-proof your career"
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    ></Template>
  );
};

export default SignUp;
