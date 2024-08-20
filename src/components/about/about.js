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
          I am Alabi Ruqayyah Damilola, a front-end developer who takes pleasure
          in crafting innovative web applications and immersing myself in
          emerging technologies. My strategy centers on user-focused
          issue-solving and design, where inventiveness seamlessly merges with
          practicality. I find fulfillment in delivering technological solutions
          that elevate people's lives and forge lasting experiences. Beyond the
          code's confines, I'm dedicated to ongoing personal and career
          development, constantly challenging limits to hone my expertise. Are
          you prepared to see your dream website come to life? Let's collaborate
          and turn it into a reality!
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
