import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    if (formdata.password !== formdata.confirmPassword) {
      toast.error("Verify Password!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Successfully!");
    // Here we're printing data to console, to verify is it storing true data
    const accountData = {
      ...formdata,
    };
    // Here we're printing data to console, to verify is it storing true data
    const finalAccountData = {
      ...accountData,
      actTyp,
    };

    console.log(finalAccountData);
    navigate("/dashboard");
  }

  const [actTyp, setActType] = useState("student");
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          className={`${
            actTyp === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-[200ms]`}
          onClick={() => setActType("student")}
        >
          Student
        </button>
        <button
          className={`${
            actTyp === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-[200ms]`}
          onClick={() => setActType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-2">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              value={formdata.firstName}
              placeholder="Enter First Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            ></input>
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              type="text"
              required
              name="lastName"
              value={formdata.lastName}
              placeholder="Enter Last Name"
              onChange={changeHandler}
            ></input>
          </label>
        </div>

        <div className="">
          <label className="w-full">
            <p className="text-[0.875rem] mt-2 text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              type="email"
              value={formdata.email}
              onChange={changeHandler}
              placeholder="Enter Email Address"
              name="email"
              required
            ></input>
          </label>
        </div>

        <div className="flex gap-x-4 mt-2 mb-2">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              type={showCreatePass ? "text" : "password"}
              value={formdata.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              required
            ></input>
            <span onClick={() => setShowCreatePass((prev) => !prev)}>
              {showCreatePass ? (
                <LuEyeOff
                  fontSize={24}
                  fill="#AFB2BF"
                  className="absolute right-3 top-[38px] cursor-pointer"
                ></LuEyeOff>
              ) : (
                <LuEye
                  fontSize={24}
                  fill="#AFB2BF"
                  className="absolute right-3 top-[38px] cursor-pointer"
                ></LuEye>
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              type={showConfirmPass ? "text" : "password"}
              value={formdata.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            ></input>
            <span onClick={() => setShowConfirmPass((prev) => !prev)}>
              {showConfirmPass ? (
                <LuEyeOff
                  fontSize={24}
                  fill="#AFB2BF"
                  className="absolute right-3 top-[38px] cursor-pointer"
                ></LuEyeOff>
              ) : (
                <LuEye
                  fontSize={24}
                  fill="#AFB2BF"
                  className="absolute right-3 top-[38px] cursor-pointer"
                ></LuEye>
              )}
            </span>
          </label>
        </div>

        <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
