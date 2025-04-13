import "./navModal.css";

function NavModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <ul>
          <li>Find a Pup</li>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavModal;
