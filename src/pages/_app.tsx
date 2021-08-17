import "../styles/globals.css";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import type { AppProps } from "next/app";
import { DefaultTemplate } from "../layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { motion } from "framer-motion";
import store from "../store/store";
import theme from "../styles/theme";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultTemplate>
            <motion.div
              key={router.route}
              initial="initial"
              animate="animate"
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </DefaultTemplate>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
