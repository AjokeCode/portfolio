import "./hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useEffect } from "react";
import ParticlesBackground from "../particles";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [text] = useTypewriter({
    words: [
      " a Software Developer",
      " a Frontend Developer",
      "deeply enthusiastic about programming",
      " well skilled at transforming design concepts into exceptional, functional websites",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div
      className="hero"
      id="home"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <ParticlesBackground />
      <h1 className="hero-header">
        Hi, I'm <span className="hero-span">Ruqayyah</span>
      </h1>
      <h1 className="hero-header-2">
        I am <span className="hero-span-2">{text} </span>
        <span className="hero-span-3">
          <Cursor cursorStyle=">>" cursorColor="#fff" />
        </span>
      </h1>
      <div className="hero-btns">
        <button className="hero-btn">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hero-link"
          >
            Projects
          </Link>
        </button>
        <button className="hero-btn">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hero-link"
          >
            Contact me
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Hero;
