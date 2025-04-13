import "./navModal.css";

function NavModal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <ul>
          <li className="navLinkModal">Find a Pup</li>
          <li className="navLinkModal">Home</li>
          <li className="navLinkModal">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavModal;
