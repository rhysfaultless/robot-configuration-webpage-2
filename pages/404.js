import Head from "next/head";
import Link from "next/link";

function Error404Page() {
  return (
    <div>
      <Head>
        <title>Clearpath | 404 Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <ul>
          <li>
            <h1 className="text-4xl">{"404 error | page not found"}</h1>
          </li>
          <li className="flex justify-center py-2">
            <Link href="/">
              <a className="text-lg text-stone-400 hover:text-yellow-400">return to homepage</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Error404Page;
