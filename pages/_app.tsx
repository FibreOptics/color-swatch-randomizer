import "../styles/app.module.scss";
import type { AppProps } from "next/app";
import theme from "@configs/theme";
import { ChakraProvider } from "@chakra-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
