import { useState } from "react";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
 



  const handleLoginClick = () => {
    navigate("/dashboard"); // Replace '/dashboard' with your desired path
  };

  return (
    <div className="relative">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-custom-image bg-cover bg-center opacity-10"></div>
        <div className="flex justify-between pt-3">
          <div>
            <h1 className="ms-3 text-lg font-semibold text-customq flex gap-1 md:text-3xl">
              SMS <p className="text-customl">Nasi</p>
            </h1>
          </div>
          <div className="me-5">
            <ul className="flex gap-7 items-center">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              {/* The Login button is handled programmatically with useNavigate */}
              <li
                className="bg-customg px-3 py-1 rounded-md cursor-pointer"
                onClick={handleLoginClick}
              >
                Login
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
