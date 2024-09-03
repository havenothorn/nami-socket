import Link from "next/link";
import { header, logo, logoImg, menu, nav } from "./styles.css";

const Header = () => {
  return (
    <header className={header}>
      <div className={logo}>
        <img className={logoImg} src="/logo.png" alt="logo" />
        <h1>Nami.Socket()</h1>
      </div>
      <nav className={nav}>
        <Link href="/about" className={menu}>
          about
        </Link>
        <Link href="/posts" className={menu}>
          posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
