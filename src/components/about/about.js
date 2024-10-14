import pdf from "./resume.pdf";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  const handleURL = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="about"
      id="about"
      data-aos="zoom-in-left"
      data-aos-duration="1500"
    >
      <h1 className="about-header">About me</h1>
      <div className="about-div">
        <p className="about-div-text">
          I'm Alabi Ruqayyah Damilola, a passionate front-end developer with a flair for building
          web applications that are not only innovative but also impactful. I thrive on blending
          creativity with functionality, ensuring every project I touch enhances user experiences
          and solves real-world problems. For me, development is more than just writing code—it's
          about delivering solutions that transform lives and leave a lasting impression. I'm committed
          to continuous learning and growth, always pushing the boundaries of what's possible in tech.
          Ready to bring your vision to life? Let's team up and make your dream website a reality!
        </p>
        <h2 className="about-header-2">
          "Evoking ideas into sophisticated solutions."
        </h2>
        <div className="about-links">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="about-link resume "
          >
            Resume
          </a>

          <button
            className="about-link"
            onClick={() => handleURL("https://github.com/AjokeCode")}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
