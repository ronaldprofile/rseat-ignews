import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/pages/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignews | Home</title>
        <meta name="description" content="Ignews by Rocketseat" />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          
          <h1>
            News about the <span>React</span> world
          </h1>

          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/assets/avatar.svg" alt="" className={styles.hero} />
      </main>
    </>
  );
}
