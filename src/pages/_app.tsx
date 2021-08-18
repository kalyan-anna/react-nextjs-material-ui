import "../styles/globals.css";

import type { AppProps, NextWebVitalsMetric } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { DefaultTemplate } from "../layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { metricService } from "../services/metric.service";
import { motion } from "framer-motion";
import store from "../store/store";
import theme from "../styles/theme";
import { useEffect } from "react";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  switch (metric.name) {
    case "TTFB": {
      metricService.setTTFB(metric.value);
      break;
    }
    case "FCP": {
      metricService.setFCP(metric.value);
      break;
    }
    case "LCP": {
      metricService.setLCP(metric.value);
      break;
    }
    case "FID": {
      metricService.setFID(metric.value);
      break;
    }
    case "CLS": {
      metricService.setCLS(metric.value);
      break;
    }
  }
}

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
