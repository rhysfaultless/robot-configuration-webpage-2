import { React } from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="h-8 dark:bg-stone-700 fixed inset-x-0 bottom-0 z-50">
      <div className="flex py-1.5 flex-wrap items-center justify-center mx-auto md:text-sm md:font-small text-white space-x-12">
        <div>© Clearpath Robotics Inc. All rights reserved.</div>
        <div>
          | &nbsp;
          <Link href="https://clearpathrobotics.com/privacy">
            <a className="hover:text-yellow-400"> Privacy </a>
          </Link>
          &nbsp; | &nbsp;
          <Link href="https://clearpathrobotics.com/terms-of-service">
            <a className="hover:text-yellow-400"> Terms of Service </a>
          </Link>
          &nbsp; | &nbsp;
          <Link href="https://clearpathrobotics.com/accessibility">
            <a className="hover:text-yellow-400"> Accessibility </a>
          </Link>
          &nbsp; |
        </div>
      </div>
    </footer>
  );
}

export default Footer;
