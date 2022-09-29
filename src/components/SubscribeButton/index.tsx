import styles from "./styles.module.scss";

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return <button className={styles.subscribeButton}>Susbscribe now</button>;
}
