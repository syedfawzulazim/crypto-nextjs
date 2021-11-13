import Head from "next/head";
import styles from "../styles/index.module.scss";
import layout from "../styles/layout.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Start</main>
    </div>
  );
}