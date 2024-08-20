import { Link } from "react-scroll";
import "./navbar.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./4.png";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isClick, setIsClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <header
      className={navbar ? "header active" : "header"}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="header-1">
        <img src={img} alt="img" className="header-1-img" />
        <h1 className="header-1-title">Ajokecode</h1>
      </div>
      <ul className="header-list">
        <li className="header-item">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="header-link"
          >
            Home
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="header-link"
          >
            About
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="header-link"
          >
            Project
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="header-link"
          >
            Contact
          </Link>
        </li>
      </ul>

      <BsListNested
        className={`${isClick ? "none" : ""} open`}
        onClick={() => setIsClick(true)}
      />
      {isClick ? (
        <div className="ham-div">
          <AiOutlineClose className="close" onClick={() => setIsClick(false)} />
          <ul className="header-lists">
            <li className="header-items">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="header-links"
              >
                Home
              </Link>
            </li>
            <li className="header-items">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="header-links"
              >
                About
              </Link>
            </li>
            <li className="header-items">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="header-links"
              >
                Project
              </Link>
            </li>
            <li className="header-items">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="header-links"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
export default Header;
