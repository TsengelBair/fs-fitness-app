const Header = ({ openModal }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__inner-items">
            <div className="header__inner-logo">Fithub</div>
            <ul className="header__inner-btns">
              <li
                className="header__inner-btn"
                onClick={() => openModal("register")}
              >
                Sign up
              </li>
              <li
                className="header__inner-btn"
                onClick={() => openModal("login")}
              >
                Sign in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
