import "./contact.css";
import img from "./img4.png";
import img2 from "./img5.png";
import img3 from "./img3.png";
import img4 from "./54801-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  const handleURL = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="contact"
      id="contact"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
    >
      <h1 className="contact-header">
        "Considering a project? Let's discuss!"
      </h1>
      <p className="contact-text">
        {" "}
        "Got a project, ideas, or questions? Let's discuss how we can
        collaborate to bring your design to life and meet your business needs."
        Excited to collaborate!
      </p>
      <div className="contact-link">
        <img
          src={img2}
          alt="img"
          className="contact-img"
          onClick={() => handleURL("https://wa.me/2349039367997")}
        />
        <img
          src={img}
          alt="img"
          className="contact-img"
          onClick={() =>
            handleURL(
              "https://www.linkedin.com/in/alabi-ruqayyah-damilola-090832256/"
            )
          }
        />
        <img
          src={img3}
          alt="img"
          className="contact-img"
          onClick={() => handleURL("https://twitter.com/ajoke_code")}
        />
        <img
          src={img4}
          alt="img"
          className="mail contact-img"
          onClick={(e) => {
            window.location.href = "mailto:ajokecode283@gmail.com";
          }}
        />
      </div>
    </div>
  );
};
export default Contact;
