import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Link href="/about-vercel">About</Link>
      </div>
    </ChakraProvider>
  );
};

export default Home;
