import { GithubLogo, X } from "phosphor-react";
import styles from "./styles.module.scss";

export function SignInWithGithubButton() {
  let isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <GithubLogo size={24} color="#04d361" />
      Ronald Tomaz
      <X size={24} color="#737380" />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <GithubLogo size={24} color="#eba417" />
      Sign with Github
    </button>
  );
}
