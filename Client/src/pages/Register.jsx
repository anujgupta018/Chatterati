import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChange = (e) => {};
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col justify-center gap-1 items-center bg-customDark">
        <form onSubmit={(event) => handleSubmit(event)}>
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
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
}
