export default function Modal({ open, map }) {
  //function takes reacts when user clicks
  //click enhances the size of the clue box
  //Modal centres on the screen
  //Modal takes props from ClueBox
  //Background is light blue and transparent or grayish
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img src={map} alt="country outline" />
      </div>
    </div>
  );
}
