import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between p-4 mx-auto shadow-md bg-white/90 ">
        <h1 className="text-2xl font-extrabold text-green-500 ">AGROGHALA</h1>
        <div className="w-1/2 ">
          <ul className="flex justify-around">
            <li className="p-2 tracking-wider truncate ease-in rounded-sm hover:bg-green-500 hover:text-white hover:duration-500">
              ABOUT US
            </li>
            <li className="p-2 tracking-wider truncate ease-in rounded-sm hover:bg-green-500 hover:text-white hover:duration-500">
              BLOGS
            </li>
            <li className="p-2 tracking-wider truncate ease-in rounded-sm hover:bg-green-500 hover:text-white hover:duration-500">
              CONTACTS
            </li>
            <li className="p-2 tracking-wider truncate ease-in rounded-sm hover:bg-green-500 hover:text-white hover:duration-500">
              SIGN UP
            </li>
            <li className="p-2 tracking-wider truncate ease-in rounded-sm hover:duration-500 hover:bg-green-500 hover:text-white">
              SIGN IN
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
