import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import capitalData from "../../lib/data";
import ClueBox from "../components/ClueBox";

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
      <div className="container">
        <div className="header">
          <h1>MATT ON A MAP</h1>
        </div>
        <div className="content content-left">
          <p>Guesses</p>
        </div>
        <div className="content content-right">
          <p>Image</p>
        </div>
        <ClueBox />
      </div>
    </>
  );
}
