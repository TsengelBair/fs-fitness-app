import gitImg from "./img/Git.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a className="footer__inner-link" href="#top">
            <img className="footer__inner-img" src={gitImg} alt="github-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
