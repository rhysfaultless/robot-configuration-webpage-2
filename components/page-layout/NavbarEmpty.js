//import React from "react";
import React, { Component } from 'react';
 
class NavbarEmpty extends Component {
  render() {
    return (
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-0.5 dark:bg-stone-300">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <p class='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-stone-700'>
                 <br></br>
              </p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default NavbarEmpty;
