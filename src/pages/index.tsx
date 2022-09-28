import Head from "next/head";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignews | Home</title>
        <meta name="description" content="Ignews by Rocketseat" />
      </Head>
      
      <div className={styles.homeContainer}>
        <h1>Home</h1>
      </div>
    </>
  );
}
