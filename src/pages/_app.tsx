import type { AppProps } from "next/app";
import "../styles/main/main.scss";
import body from "../containers/Body/body.module.scss";
import styles from "../styles/layout.module.scss";
import { Navbar, SideMenu, Footer } from "../containers";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <div className={styles.div}>
      <Navbar />
      <SideMenu />
      <div className={body.div}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
