import React from "react";

function Signup() {
  return (
    <div className=" max-w-lg mx-auto p-8  shadow-lg mt-2">
      <h1 className="font-extrabold font-san text-green-500 mb-2 rounded-sm">
        AGROGHALA
      </h1>
      <form className="flex flex-col max-w-md mx-auto">
        <label htmlFor="f-name">Full Name</label>
        <input id="f-name" className="border-b-4 my-8" type="text" required />
        <label htmlFor="f-email">Email address</label>
        <input id="f-email" className="border-b-4 my-8" required />
        <label htmlFor="f-phone">Phone Number</label>
        <input id="f-phone" className="border-b-4 my-8" required />
        <label htmlFor="f-pass">Create Password</label>
        <input id="f-pass" className="border-b-4 my-8" required />
        <label htmlFor="f-con">Confirm Password</label>
        <input id="f-con" className="border-b-4 my-8" required />
        <label htmlFor="f-city">City</label>
        <input id="f-city" className="border-b-4 my-8" required />
        <label htmlFor="f-zip">Zip Code</label>
        <input id="f-zip" className="border-b-4 my-8" required />

        <button
          type="submit"
          className="bg-green-500 p-2 border-0 rounded-md text-white text-xl mb-2"
        >
          {" "}
          Sign Up
        </button>
        <p className="text-center mt-2">
          Already have an account?<span className="underline"> Log in</span>
        </p>
        <span className="text-right underline italic">help</span>
      </form>
    </div>
  );
}

export default Signup;
