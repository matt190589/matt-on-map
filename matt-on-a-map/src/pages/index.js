import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import capitalData from "../../lib/data";
import ClueBox from "../components/ClueBox";
import GuessInput from "@/components/GuessInput";
import { useState, useEffect } from "react";
import mattLogo from "../../public/Images/matt-on-a-map-image.png";

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

  const handleGuessListChange = (newGuessLists) => {
    setGuessLists(newGuessLists);
  };
  const dayNum = 1;

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
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="left-column clue-font">
              <h1>Guesses</h1>
              <h3>
                Matt loves travelling and he's off on an adventure visiting all
                the countries of the world. Every day he'll be in a different
                place. Your job is to find him!
              </h3>
              <GuessInput
                guessLists={guessLists}
                onGuessListChange={handleGuessListChange}
              />
            </div>
          </div>
          <div className="column">
            <div className="right-column">
              <Image
                className="image-logo"
                src={mattLogo}
                alt="world map"
                width={500}
                height={500}
              />
            </div>
          </div>
          <ClueBox guessLists={guessLists} dayNum={dayNum} />
        </div>
      </div>
    </>
  );
}
