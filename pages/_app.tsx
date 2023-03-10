import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "../styles/custom.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
