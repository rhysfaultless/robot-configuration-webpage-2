import Head from "next/head";

function Error404Page() {
  return (
    <div>
      <Head>
        <title>Clearpath | 404 Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{"404 error | Page not found"}</h1>
      </main>
    </div>
  );
}

export default Error404Page;
