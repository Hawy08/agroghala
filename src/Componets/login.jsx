import React from "react";

function Login() {
  return (
    <div className=" max-w-lg mx-auto p-8 shadow-lg mt-2">
      <h1 className="font-extrabold font-san text-green-500 mb-14 rounded-sm">
        AGROGHALA
      </h1>
      <form className="flex flex-col max-w-md mx-auto mt-36">
        <label htmlFor="f-email">Email address</label>
        <input id="f-email" className="border-b-4 my-8" type="email" required />
        <label htmlFor="f-pass">Password</label>
        <input
          id="f-pass"
          type="password"
          className="border-b-4 my-8"
          required
        />
        <button
          type="submit"
          className="bg-green-500 p-2 border-0 rounded-md text-white text-xl mb-2 mt-10"
        >
          {" "}
          Sign Up
        </button>
        <p className="text-center mt-2">
          Don't have an account?<span className="underline"> Sign Up</span>
        </p>
        <span className="text-right underline italic mt-10">
          Forgot Password
        </span>
      </form>
    </div>
  );
}

export default Login;
