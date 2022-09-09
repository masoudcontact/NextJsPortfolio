import Layout from "../Components/Layout/layout";
import "../styles/globals.scss";
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SSRProvider>
      {getLayout(
        <ThemeProvider theme={theme}>
          <Head>
            <title>Masoud Naji Portfolio</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      )}
    </SSRProvider>
  );
}

export default MyApp;
