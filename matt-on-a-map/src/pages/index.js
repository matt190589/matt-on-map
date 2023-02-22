import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import capitalData from "../../lib/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(capitalData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="matt on a map game" content="" Geography game />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className="">
          <h1>MATT ON A MAP</h1>
          <div className={styles.card}>Hello</div>
          <div className={styles.card}>Hello</div>
        </div>
        <div className={styles.grid}>
          <div>
            <h1>Clue 1: {capitalData[0].population}</h1>
            <h1>Clue 4: {capitalData[0].continent}</h1>
            <h1>Clue 5: {capitalData[0].firstLetter}</h1>
          </div>
          <h1>Clue 2: Map outline</h1>
          <h1>Clue 3: Flag</h1>
        </div>
      </main>
    </>
  );
}
