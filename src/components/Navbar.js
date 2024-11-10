import React from "react";
import "../app/globals.css";
function Navbar() {
  return (
    <div className=" flex justify-between p-5 bg-black">
      <h1>Contact Connect Ph</h1>
      <ul className="flex gap-6">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact-Connect</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
