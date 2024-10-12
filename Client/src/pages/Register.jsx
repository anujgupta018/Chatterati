import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password, confirmPassword, email } = values;
      const { data } = axios.post();
    }
  };
  const handleValidation = () => {
    const { username, password, confirmPassword, email } = values;

    if (username.length < 3) {
      toast.error("Username length should be greater than 3", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be greater than or equal to 8 characters",
        toastOptions
      );
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col justify-center gap-1 items-center bg-customDark">
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col gap-4 bg-custom1 rounded-xl px-10 py-9"
        >
          <div className="flex items-center justify-center gap-1">
            <img src={Logo} alt="ChatteratiLogo" className="h-20" />
            <h2 className="text-white uppercase text-3xl font-bold">
              Chatterati
            </h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            className="bg-transparent p-4 border-[0.1rem] border-[#4e0eff] rounded-[0.4rem] text-white w-full text-xl focus:border-[0.1rem] focus:border-[#997af0] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            className="bg-transparent p-4 border-[0.1rem] border-[#4e0eff] rounded-[0.4rem] text-white focus:border-[0.1rem] focus:border-[#997af0] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            className="bg-transparent p-4 border-[0.1rem] border-[#4e0eff] rounded-[0.4rem] text-white focus:border-[0.1rem] focus:border-[#997af0] focus:outline-none"
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
            className="bg-transparent p-4 border-[0.1rem] border-[#4e0eff] rounded-[0.4rem] text-white focus:border-[0.1rem] focus:border-[#997af0] focus:outline-none"
          />
          <button
            className=" bg-[#997af0] text-white p-3 border-none font-bold cursor-pointer rounded-[0.4rem] uppercase text-[1rem] hover:bg-[#4e0eff]
            transition duration-300 ease-in-out transform hover:scale-105 "
            type="submit"
          >
            Create User
          </button>
          <span className="text-white uppercase">
            Already have an account ?{" "}
            <Link to="/login" className="text-[#4e0eff] font-bold">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
