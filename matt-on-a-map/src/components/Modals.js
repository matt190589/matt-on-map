export default function Modal({ open, pic, onClose }) {
  //function takes reacts when user clicks
  //click enhances the size of the clue box
  //Modal centres on the screen
  //Modal takes props from ClueBox
  //Background is light blue and transparent or grayish
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
        className="modalContainer"
      >
        <img src={pic} alt="country outline" />
        <p onClick={onClose} className="closeBtn">
          X
        </p>
      </div>
    </div>
  );
}
