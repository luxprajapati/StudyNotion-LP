import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login Sucessfully");
    // Here we're printing data to console, to verify is it storing true data
    const accountData = {
      ...formData,
    };
    console.log(accountData); 
    navigate("/dashboard");
  }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name="email"
            required
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          ></input>
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password<sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            required
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          ></input>
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <LuEyeOff fontSize={24} fill="#AFB2BF"></LuEyeOff>
            ) : (
              <LuEye fontSize={24} fill="#AFB2BF"></LuEye>
            )}
          </span>
          <Link to="#">
            <p
              className="text-xs mt-1
             text-blue-100 ml-auto max-w-max "
            >
              Forgot password
            </p>
          </Link>
        </label>

        <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Sign in
        </button>

        {/* <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Sign in
        </button>
        <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Sign in
        </button>
        
        <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Sign in
        </button>
        <button className="w-full rounded-[8px] text-center bg-yellow-50 font-medium text-richblack-900 mt-6 px-[12px] py-[8px]">
          Sign in
        </button> */}
      </form>
     </div>
  );
};

export default LoginForm;
