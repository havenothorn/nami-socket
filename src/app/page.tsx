import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href="/about">about</Link>
      <Link href="/posts">posts</Link>
    </>
  );
};

export default Home;
