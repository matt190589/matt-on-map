import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import capitalData from "../../lib/data";
import ClueBox from "../components/ClueBox";
import GuessInput from "@/components/GuessInput";
import { useState, useEffect } from "react";
import mattLogo from "../../public/Images/matt-on-a-map-image.png";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [guessLists, setGuessLists] = useState([]);

  useEffect(() => {
    const storedGuessLists = JSON.parse(localStorage.getItem("guessLists"));
    if (storedGuessLists) {
      //check if there is a guessList
      setGuessLists(storedGuessLists);
      console.log(storedGuessLists);
    }
  }, []);

  useEffect(() => {
    if (guessLists.length) {
      localStorage.setItem("guessLists", JSON.stringify(guessLists));
    }
  }, [guessLists]);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("guessLists");
    };

    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const timeToMidnight = nextMidnight - now;

    const timeoutId = setTimeout(() => {
      clearLocalStorage();
      setInterval(clearLocalStorage, 24 * 60 * 60 * 1000); //Repeat every 24 hours
    }, timeToMidnight);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleGuessListChange = (newGuessLists) => {
    setGuessLists(newGuessLists);
  };
  const dayNum = 1;

  return (
    <>
      <Head>
        <title>Matt on a Map</title>
        <meta name="matt on a map game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="container">
        <Navbar />
        <div class="left-column">
          {" "}
          <h1>Guesses</h1>
          <h3>
            Matt loves travelling and he's off on an adventure visiting all the
            countries of the world. Every day he'll be in a different place.
            Your job is to find him!
          </h3>
          <GuessInput
            guessLists={guessLists}
            onGuessListChange={handleGuessListChange}
          />
        </div>
        <div class="right-column">
          <ClueBox guessLists={guessLists} dayNum={dayNum} />
        </div>
      </div>
    </>
  );
}
