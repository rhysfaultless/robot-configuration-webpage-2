//import React from "react";
import React, { Component } from 'react';
import Link from 'next/link'
 
class NavbarOutdoor extends Component {
  render() {
    return (
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-0.5 dark:bg-stone-300">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <ul classNane="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
              <Link href='/outdoor/jackal'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700'>
                  Jackal
                </a>
              </Link>
            </li>
            <li>
              <Link href='/outdoor/husky'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700'>
                  Husky
                </a>
              </Link>
            </li>
            <li>
              <Link href='/outdoor/warthog'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700'>
                  Warthog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default NavbarOutdoor;
