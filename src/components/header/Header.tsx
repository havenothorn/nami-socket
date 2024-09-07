import Link from "next/link";
import * as styles from "./styles.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src="/logo.png" alt="logo" />
        <h1>Nami.Socket()</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.menu}>
          about
        </Link>
        <Link href="/posts" className={styles.menu}>
          posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
