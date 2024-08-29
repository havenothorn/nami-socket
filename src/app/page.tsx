import Header from "@/components/header/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
    </>
  );
};

export default Home;
