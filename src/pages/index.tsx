import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../lib/stripe";

import styles from "../styles/pages/home.module.scss";

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/assets/avatar.svg" alt="" width={334} height={520} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Ln5R6HCpDMAsHWUoTn2SEx1");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },

    revalidate: 60 * 60 * 24, // 1 day or 24 hours
  };
};
