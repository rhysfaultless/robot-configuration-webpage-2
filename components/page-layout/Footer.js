import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'
 
class Footer extends Component {
  render() {
    return (
      <footer className="dark:bg-stone-700">
        <br></br>
        <div className="container flex flex-wrap items-center justify-center mx-auto md:text-sm md:font-small text-white space-x-12">
          <div>
            <Link href='https://clearpathrobotics.com/'>
              <a>
                <Image 
                  src="/images/clearpath_robotics_transparent_light.png" 
                  alt="Clearpath Robotics yellow and black hexagon logo"
                  height={750/25}
                  width={2958/25}
                />
              </a>
            </Link>
          </div>
          <div>
            © Clearpath Robotics Inc. All rights reserved. 
          </div>
          <div>
            |
            &nbsp;
            <Link href='https://clearpathrobotics.com/privacy'>
                <a> Privacy </a>
            </Link>
            &nbsp;
            |
            &nbsp;
            <Link href='https://clearpathrobotics.com/terms-of-service'>
              <a> Terms of Service </a>
            </Link>
            &nbsp;
            |
            &nbsp;
            <Link href='https://clearpathrobotics.com/accessibility'>
              <a> Accessibility </a>
            </Link>
            &nbsp;
            |
          </div>
		    </div>
        <br></br>
      </footer>
    );
  }
}
 
export default Footer;
