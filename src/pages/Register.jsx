import React, { useRef, useState } from "react";
import logo from "../assets/images/Netflix-logo.png";
import bgImage from "../assets/images/Postter.jpeg";

const Register = () => {
  const [isEmail, setIsEmail] = useState("");
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  
  const handleChange = (event) => {
    setIsEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailSubmit = () => {
    if (isEmail) {
      passwordRef.current.focus();
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleFinish = () => {
    alert(`Email: ${isEmail}, Password: ${password}`);
    // You can add logic here to handle form submission.
  };

  return (
    <div
      className="text-white w-full h-full absolute flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-row justify-between p-4">
        <img src={logo} className="w-1/6" alt="Netflix Logo" />
        <button className="bg-red-600 text-white rounded p-3 h-fit">
          Sign Up
        </button>
      </div>

      <div className="bg-black opacity-75 flex flex-col items-center justify-center text-center flex-grow p-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Unlimited Movies, TV shows, and more.
        </h1>
        <h3 className="text-2xl md:text-3xl mt-4">Watch anywhere, anytime.</h3>
        <p className="text-xl mt-6">
          Ready to start? Enter your email to create or restart your membership.
        </p>

        {!isEmail ? (
          <div className="flex mt-6">
            <input
              // value={isEmail}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="p-4 text-black rounded-l"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-red-600 text-white rounded-r p-4 font-bold"
            >
              Get Started
            </button>
          </div>
        ) : (
          <form className="flex mt-6" onSubmit={handleFinish}>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              className="p-4 text-black rounded-l"
              ref={passwordRef}
            />
            <button
              type="submit"
              className="bg-red-600 text-white rounded-r p-4 font-bold"
            >
              Finish
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
