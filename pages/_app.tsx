import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import type { AppProps } from "next/app";
import { DefaultTemplate } from "../layout";
import Head from "next/head";
import theme from "../styles/theme";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>BizExpo</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
