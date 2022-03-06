import { React } from "react";
import "/styles/globals.css";
import Layout from "/components/page-layout/Layout";

function SafeHydrate({ children }) {
  return <div suppressHydrationWarning>{typeof window === "undefined" ? null : children}</div>;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SafeHydrate>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SafeHydrate>
    </>
  );
}

export default MyApp;
