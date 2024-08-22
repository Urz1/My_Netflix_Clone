import React, { useRef, useState } from "react";
import logo from "../assets/images/Netflix-logo.png";
import bgImage from "../assets/images/Postter.jpeg";
import { useForm } from "react-hook-form";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSetted, setEmailSetted] = useState(false); // Manage with useState
  const passwordRef = useRef();


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (values)  => {
    setEmail(values)
    // alert(JSON.stringify(values, null, 2))  
    setEmailSetted(true);
  };

  const handleFinish = (event) => {
    event.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <div
      className="text-white w-full h-full absolute flex flex-col justify-between"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-row justify-between p-4">
        <img src={logo} className="w-1/6" alt="Netflix Logo" />
        <button className="bg-red-600 text-white rounded p-3 w-fit h-fit">
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

        {!emailSetted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="p-4 text-black rounded-l"
              placeholder="Email Address"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            {/* {errors.email && <span>Invalid email</span>} */}

            <button
              type="submit"
              className="bg-red-600 text-white rounded-r p-4 font-bold"
            >Get Started 
            </button>
          </form>
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
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
