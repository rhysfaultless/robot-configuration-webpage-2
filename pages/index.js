import Head from 'next/head'
import Image from 'next/image'

function Page() {
  return (
    <div>
      <Head>
        <title>Clearpath | Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="flex items-center justify-center h-screen">
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