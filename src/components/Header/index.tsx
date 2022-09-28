import { SignInWithGithubButton } from "./SignInWithGithubButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <img src="/assets/logo.svg" alt="" />

          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
            </ul>
          </nav>
        </div>

        <SignInWithGithubButton />
      </div>
    </header>
  );
}
