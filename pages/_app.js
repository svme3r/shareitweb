import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <Head>
            <link rel="icon" href="/assets/logo.png" />
          </Head>
          <NextNProgress color="#c25df5" />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
