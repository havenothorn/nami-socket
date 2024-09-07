import Link from "next/link";
import * as styles from "./styles.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <Link href="https://github.com/havenothorn">
          <img className={styles.github} src={"/github.svg"} alt="github" />
        </Link>
        <Link href="https://www.linkedin.com/in/hee-jung-nam-b5186919b/">
          <img className={styles.linkedIn} src="/linkedIn.svg" alt="linkedIn" />
        </Link>
      </div>
      <p>© Nami 2024</p>
    </footer>
  );
};

export default Footer;
