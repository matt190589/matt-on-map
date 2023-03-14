import capitalData from "lib/data";
import Image from "next/image";
import Modals from "./Modals";
import { useState } from "react";

export default function ClueBox(props) {
  const [openModal, setOpenModal] = useState(false);
  const guessLists = props.guessLists;
  const mapUrl = capitalData[props.dayNum].countryMapUrl;
  const flagUrl = capitalData[props.dayNum].countryflagUrl;
  console.log(mapUrl);
  return (
    <div className="row">
      <div className="short-column">
        <div className="left-column clue-font">
          <h2>Clue 1: Population </h2>
          {guessLists.length > 0 ? (
            <h2>{capitalData[props.dayNum].population}</h2>
          ) : (
            ""
          )}
          <h2>Clue 3: Continent </h2>
          {guessLists.length > 3 ? (
            <h2>{capitalData[props.dayNum].continent}</h2>
          ) : (
            ""
          )}
          <h2>Clue 5: Capital </h2>
          {guessLists.length > 4 ? (
            <h2>{capitalData[props.dayNum].firstLetter}</h2>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="short-column image">
        <div className="right-column">
          <h2>Clue 2: Flag </h2>
          <button onClick={() => setOpenModal(true)}>Modal</button>
          <Modals
            open={openModal}
            map={mapUrl}
            onClose={() => setOpenModal(false)}
          />
          {guessLists.length > 1 ? (
            <img src={mapUrl} alt="map outline" width={200} height={200} />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="short-column image">
        <div className="right-column">
          <h2>Clue 4: Map outline</h2>
          {guessLists.length > 2 ? (
            <img src={flagUrl} alt="country flag" width={200} height={200} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
