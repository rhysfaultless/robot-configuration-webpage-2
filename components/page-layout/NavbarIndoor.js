//import React from "react";
import React, { Component } from "react";
import Link from "next/link";

class NavbarIndoor extends Component {
  render() {
    return (
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-0.5 dark:bg-stone-300">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/indoor/dingo-diff">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700">
                  Dingo Differential
                </a>
              </Link>
            </li>
            <li>
              <Link href="/indoor/dingo-omni">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700">
                  Dingo Omnidirectional
                </a>
              </Link>
            </li>
            <li>
              <Link href="/indoor/boxer">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700">Boxer</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarIndoor;
