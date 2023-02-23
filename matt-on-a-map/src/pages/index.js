import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import capitalData from "../../lib/data";
import ClueBox from "../components/ClueBox";
import GuessInput from "@/components/GuessInput";
import { useState } from "react";

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
      <div className="header">
        <h1>MATT ON A MAP</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="left-column">
              <h1>Guesses</h1>
              <GuessInput/>
            </div>
          </div>
          <div class="column">
            <div class="right-column">
              <h1>Image</h1>
            </div>
          </div>
          <ClueBox />
        </div>
      </div>
    </>
  );
}
