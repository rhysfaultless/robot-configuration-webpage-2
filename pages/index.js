import Head from 'next/head'
import Image from 'next/image'
import NavbarEmpty from '/components/page-layout/NavbarEmpty';

function Page() {
  return (
    <div>
      <Head>
        <title>Clearpath | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <NavbarEmpty />
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

export default Page;