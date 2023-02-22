import capitalData from "lib/data";

export default function ClueBox() {
  return (
    <div className="clue-box">
      <div>
        <h1>Clue 1: {capitalData[0].population}</h1>
        <h1>Clue 4: {capitalData[0].continent}</h1>
        <h1>Clue 5: {capitalData[0].firstLetter}</h1>
      </div>
      <h1>Clue 2: Map outline</h1>
      <h1>Clue 3: Flag</h1>
    </div>
  );
}
