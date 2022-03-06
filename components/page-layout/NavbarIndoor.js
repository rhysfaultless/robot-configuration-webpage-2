import { React } from "react";
import Link from "next/link";

function NavbarIndoor() {
  return (
    <nav className="dark:bg-stone-300 py-1">
      <ul className="justify-end flex space-x-8 px-10">
        <li>
          <Link href="/indoor/dingo-diff">
            <a className="px-3 text-white hover:text-stone-700">Dingo Differential</a>
          </Link>
        </li>
        <li>
          <Link href="/indoor/dingo-omni">
            <a className="lg:inline-flex lg:w-auto w-full px-3 rounded text-white items-center justify-center hover:text-stone-700">Dingo Omnidirectional</a>
          </Link>
        </li>
        <li>
          <Link href="/indoor/boxer">
            <a className="lg:inline-flex lg:w-auto w-full px-3 rounded text-white items-center justify-center hover:text-stone-700">Boxer</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarIndoor;
