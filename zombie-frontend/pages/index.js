import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zombie Test Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </div>
  );
}
