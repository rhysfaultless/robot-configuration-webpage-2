import { React } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-stone-700 px-2 py-1.5 sticky top-0 z-50 flex">
      <div className="left-0 relative w-1/2">
        <Link href="/">
          <a>
            <Image src="/images/clearpath_robotics_transparent_light.png" alt="Clearpath Robotics hexagon logo" height={750 / 25} width={2958 / 25} />
          </a>
        </Link>
      </div>
      <div className="right-0 relative w-3/4">
        <ul className="justify-end flex space-x-8 px-10 ">
          <li>
            <Link href="/dingo-diff">
              <a className="px-2 text-white hover:text-yellow-400">Dingo-D</a>
            </Link>
          </li>
          <li>
            <Link href="/dingo-omni">
              <a className="px-2 text-white hover:text-yellow-400">Dingo-O</a>
            </Link>
          </li>
          <li>
            <Link href="/boxer">
              <a className="px-2 text-white hover:text-yellow-400">Boxer</a>
            </Link>
          </li>
          <li>
            <Link href="/jackal">
              <a className="px-2 text-white hover:text-yellow-400">Jackal</a>
            </Link>
          </li>
          <li>
            <Link href="/husky">
              <a className="px-2 text-white hover:text-yellow-400">Husky</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
