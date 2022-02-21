import React, { Component } from "react";
import Link from "next/link";

class NavbarOutdoor extends Component {
  render() {
    return (
      <nav className="dark:bg-stone-300 py-1">
          <ul className="justify-end flex space-x-8 px-10">
            <li>
              <Link href="/outdoor/jackal">
                <a className="px-3 text-white hover:text-stone-700">Jackal</a>
              </Link>
            </li>
            <li>
              <Link href="/outdoor/husky">
                <a className="px-3 text-white hover:text-stone-700">Husky</a>
              </Link>
            </li>
            <li>
              <Link href="/outdoor/warthog">
                <a className="px-3 text-white hover:text-stone-700">Warthog</a>
              </Link>
            </li>
          </ul>
      </nav>
    );
  }
}

export default NavbarOutdoor;
