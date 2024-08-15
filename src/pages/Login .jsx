import React, { useRef, useState } from "react";
import logo from "../assets/images/Netflix-logo.png";
import bgImage from "../assets/images/unsplash.jpg";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm(); // Initialize react-hook-form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <div
      className="text-white bg-black bg-opacity-75 flex flex-col items-center  text-center absolute h-full w-full p-6 rounded "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="items-center flex flex-row justify-between p-4">
        <img src={logo} className="w-1/6" alt="Netflix Logo" />
      </div>
     
      <div className="bg-black bg-opacity-75 flex flex-col items-center justify-center text-center h-fit w-fit p-6 rounded align-middle">
        <h1 className="text-2xl mb-4">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            {...register("email", { required: true })}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            {...register("password", { required: true })}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-red-600 p-2 rounded mt-4 hover:bg-red-700 transition"
          >
            Sign in
          </button>
        </form>
        <span className="mt-4">
          New to Netflix?{" "}
          <small>
            <button className="text-blue-500 underline">Sign up now</button>
          </small>
        </span>
      </div>
    </div>
  );
};

export default Login;




// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };

// const onSubmit = (values)  => {
//   setEmail(values)
//   // alert(JSON.stringify(values, null, 2))  
//   setEmailSetted(true);
// };

// const handleFinish = (event) => {
//   event.preventDefault();
//   alert(`Email: ${email}, Password: ${password}`);
// };
// const {
//   register,
//   handleSubmit,
//   formState: { errors }
// } = useForm();

{/* <div className="bg-black opacity-75 flex flex-col items-center justify-center text-center flex-grow p-6">
<h1 className="text-4xl md:text-5xl font-bold">
  Unlimited Movies, TV shows, and more.
</h1>
<h3 className="text-2xl md:text-3xl mt-4">Watch anywhere, anytime.</h3>
<p className="text-xl mt-6">
  Ready to start? Enter your email to create or restart your membership.
</p>


</div> */}

// {!emailSetted ? (
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <input
//       type="email"
//       className="p-4 text-black rounded-l"
//       placeholder="Email Address"
//       {...register("email", {
//         required: true,
//         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//       })}
//     />
//     {/* {errors.email && <span>Invalid email</span>} */}

//     <button
//       type="submit"
//       className="bg-red-600 text-white rounded-r p-4 font-bold"
//     >Get Started 
//     </button>
//   </form>
// ) : (
//   <form className="flex mt-6" onSubmit={handleFinish}>
//     <input
//       value={password}
//       onChange={handlePasswordChange}
//       type="password"
//       placeholder="Password"
//       className="p-4 text-black rounded-l"
//       ref={passwordRef}
//     />
//     <button
//       type="submit"
//       className="bg-red-600 text-white rounded-r p-4 font-bold"
//     >
//       Start
//     </button>
//   </form>
// )}