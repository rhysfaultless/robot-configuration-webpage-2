import Head from "next/head";
import Image from 'next/image';
import NavbarIndoor from "/components/page-layout/NavbarIndoor";

function Page() {
  return (
    <div>
      <Head>
        <title>Clearpath | Indoor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavbarIndoor />
      </div>
      <div className="grid place-items-center z-0">
        <Image 
          src="/images/CPR_Family_Portrait.jpg" 
          alt="Clearpath Robotics hexagon logo"
          height={1008/2}
          width={1344/2}
        />
      </div>
    </div>
  );
}

export default Page;
