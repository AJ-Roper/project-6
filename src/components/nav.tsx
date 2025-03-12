import "./nav.css";

function Nav() {
  return (
    <>
      <div className="nav__container">
        <div className="logo">
          <img className="logo__img" src="src\assets\paw.png" />
          <span className="wordmark">Furrever</span>
        </div>
        <div className="nav__links">
          <ul className="nav__link--list">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="">
              Find A Pup
            </a>
            <a className="nav-link nav-link__primary">Contact</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
