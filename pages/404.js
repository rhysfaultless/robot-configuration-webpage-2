import Head from "next/head";

function Error404Page() {
  return (
    <div>
      <Head>
        <title>Robot Configurator | 404 Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>404 error | Page not found</h1>
        <h1>These aren't the droids you're looking for</h1>
      </main>
    </div>
  );
}

export default Error404Page;
