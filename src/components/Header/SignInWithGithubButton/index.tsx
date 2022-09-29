import { GithubLogo, X } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./styles.module.scss";

export function SignInWithGithubButton() {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <button type="button"  onClick={() => signOut()} className={styles.signInButton}>
      <GithubLogo size={24} color="#04d361" />
      {session.user?.name}
      <X size={24} color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={styles.signInButton}
    >
      <GithubLogo size={24} color="#eba417" />
      Sign with Github
    </button>
  );
}
