import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import capitalData from "../../lib/data";
import ClueBox from "../components/ClueBox";
import GuessInput from "@/components/GuessInput";
import { useState } from "react";
import mattLogo from "../../public/Images/matt-on-a-map-image.png";
import { saveData } from "../components/Store";
import { getData } from "../components/Store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [guessLists, setGuessLists] = useState([]);

  const handleGuessListChange = (newGuessLists) => {
    setGuessLists(newGuessLists);
    // saveData("test", { message: "Hello world" });
    // const test = getData("test");
    // console.log(test); // should output { message: "Hello world" }
    // console.log("props", newGuessLists);
    // saveData("guessList", newGuessLists);
    localStorage.setItem("test", "Hello world");
    const value = localStorage.getItem("test");
    console.log(value); // should output "Hello world"
    const valueRetrieve = localStorage.getItem("test");
    console.log("retrieve", valueRetrieve);
  };

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
                the capital cities of the world. Every day he'll be in a
                different city. Your job is to find him!
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
          <ClueBox guessLists={guessLists} />
        </div>
      </div>
    </>
  );
}
