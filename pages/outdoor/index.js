import Head from 'next/head'
import Image from 'next/image'
import NavbarOutdoor from '/components/page-layout/NavbarOutdoor';

function OutdoorPage() {
  return (
    <div>
      <Head>
        <title>Clearpath | Outdoor</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <NavbarOutdoor />
      </div>
      <div className="grid place-items-center">
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

export default OutdoorPage;