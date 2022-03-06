//import React from "react";
import { React } from "react";

function NavbarEmpty() {
  return (
    <nav className="dark:bg-stone-300 py-1">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <ul className="justify-end flex space-x-8 px-10">
          <li>
            <p className="px-3 text-white hover:text-stone-700">
              <br></br>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarEmpty;
