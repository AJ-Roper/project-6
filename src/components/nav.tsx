import "./nav.css";
import NavModal from "./navModal";
import React, { useEffect, useState } from "react";

function Nav() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <div className="navBackground">
      <div className="nav__container">
        <div className="logo">
          <img className="logo__img" src="src\assets\paw.png" />
          <span className="wordmark">Furrever</span>
        </div>
        <button
          type="button"
          className="hamburgerMenu"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img className="pawIconModal" src="src\assets\hamMenu.png" />
        </button>
        {openModal && <NavModal closeModal={setOpenModal} />}
        <div className="nav__links">
          <ul className="nav__link--list">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="">
              Find A Pup
            </a>
            <a className=" nav-link__primary">Contact</a>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Nav;
