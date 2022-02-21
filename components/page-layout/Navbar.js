import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white dark:bg-stone-700 px-2 py-1.5 sticky top-0 z-50 flex">
        <div className="left-0 relative w-1/2">
          <Link href="/">
            <a>
              <Image src="/images/clearpath_robotics_transparent_light.png" alt="Clearpath Robotics hexagon logo" height={750 / 25} width={2958 / 25} />
            </a>
          </Link>
        </div>
        <div className="right-0 relative w-1/2">
          <ul className="justify-end flex space-x-8 px-10 ">
            <li>
              <Link href="/outdoor">
                <a className="px-6 text-white hover:text-yellow-400">Outdoor</a>
              </Link>
            </li>
            <li>
              <Link href="/indoor">
                <a className="text-white hover:text-yellow-400">Indoor</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
