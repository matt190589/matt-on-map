export default function GuessList({ guessList }) {
  return (
    <div>
      <li>
        <h2>{guessList.userGuess}</h2>
      </li>
    </div>
  );
}
