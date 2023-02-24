import capitalData from "lib/data";

export default function ClueBox(props) {
  const guessLists = props.guessLists;
  return (
    <div className="row">
      <div className="short-column">
        <div className="left-column">
          <h2>
            Clue 1: {capitalData[0].population} Length: {guessLists.length}
          </h2>
          <h2>Clue 4: {capitalData[0].continent}</h2>
          <h2>Clue 5: {capitalData[0].firstLetter}</h2>
        </div>
      </div>
      <div className="short-column">
        <div className="right-column">
          <h2>Clue 2: Map outline</h2>
        </div>
      </div>
      <div className="short-column">
        <div className="right-column">
          <h2>Clue 3: Flag</h2>
        </div>
      </div>
    </div>
  );
}
