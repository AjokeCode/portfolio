import "./project.css";
import img1 from "./BDS.PNG";
import img2 from "./empylo.PNG";
import img3 from "./natour.PNG";
import img4 from "./getlinked.PNG";
import img5 from "./trackit.PNG";
import img6 from "./zamgleam.PNG";
import img7 from "./emplyo22.PNG";
import img8 from "./agromart.PNG";
import img9 from "./clothy.PNG";
import img10 from "./academix.PNG";
import img11 from "./arriaayah.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Project = () => {
  const handleURL = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="project" id="project">
      <h1 className="project-header">My Projects so far</h1>
      <div className="projects">

      {/* <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img10} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Academix</h2>
            <p className="p1-text">
              Syntanext is an innovative educational web app designed
              to meet all the needs of institution students. It provides
              academic resources across all faculties, offers a secure space
              for storing resources, and includes a marketplace where users
              can buy and sell goods with ease. Additionally, Syntanext helps
              students find roommates and search for housing,
              making it a comprehensive solution for campus life
              
            </p>
            <p className="p1-text">
              Technologies used: Typescript, Zustand, Nextjs, Tailwindcss, Graphql.
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/hazeezet/archive-frontend")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://academix.syntanext.com/")
              }
            >
              Live link
            </a>
          </div>
        </div> */}

<div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img11} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Arriaayah</h2>
            <p className="p1-text">
              Arriaayah is an islamic educational platform that provides a wide range of
              resources and services to help students learn and grow in their faith. Built with 
              a focus on user experience, the platform offers a variety of features, including
              admin dashboard (only admin can access), student dashboard, and a landing page where new candidates 
              can enrol. I led the frontend team in building the platform, ensuring that it was user-friendly and visually appealing
              collaborating closely with the backend team and UI designer to ensure seamless integration of all features.              
            </p>
            <p className="p1-text">
              Technologies used: Typescript, Zustand, Nextjs, Tailwindcss, Nodejs.
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/AjokeCode/Ar-Riaayah-Academy")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://arriaayah.com/")
              }
            >
              Live link
            </a>
          </div>
        </div>

        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img8} alt="agromart" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Agromart</h2>
            <p className="p1-text">
              A platform that connect farmers and consumers for fresh,
              sustainable products. It eradicates middlemen's extortation!
            </p>
            <p className="p1-text">
              Technologies used: Reactjs and vanilla css
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://github.com/AjokeCode/agromart")}
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://agromart.vercel.app/")}
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img9} alt="clothy" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Clothy</h2>
            <p className="p1-text">
              Clothy is an e-commerce platform offering a variety of stylish
              clothing for men and women.
            </p>
            <p className="p1-text">
              Technologies used: Typescript, Nextjs, Zustand and Tailwindcss
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://github.com/AjokeCode/Clothy")}
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://clothy-ecommerce.vercel.app/")}
            >
              Live link
            </a>
          </div>
        </div>

        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img1} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">BlueDevtech Solutions</h2>
            <p className="p1-text">
              BlueDevTech Solution is an Employment hub for online learning and
              internship.
            </p>
            <p className="p1-text">
              Technologies used: Reactjs and vanilla css
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/AjokeCode/bluedevtechsolutions")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://www.bluedevtechsolution.com.ng/")
              }
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img7} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Empylo</h2>
            <p className="p1-text">
              A responsive React App for innovative solutions for both
              individuals and organisations built for empylo company in London.
            </p>
            <p className="p1-text">
              Technologies used: Reactjs and vanilla css
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://github.com/AjokeCode/Empylo-2")}
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://empylo-2.vercel.app")}
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img2} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Empylo- A mental health App</h2>
            <p className="p1-text">
              A responsive React App built for a psychological company in
              London.
            </p>
            <p className="p1-text">
              Technologies used: Reactjs and vanilla css
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://github.com/AjokeCode/Empylo")}
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://empylo.vercel.app/")}
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img3} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Natours- Explore the Nature</h2>
            <p className="p1-text">
              A responsive landing page for a non-existing company.
            </p>
            <p className="p1-text">
              Technologies used: HTML and SASS(CSS preprocessor)
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://github.com/AjokeCode/Natour")}
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://explore-the-nature.netlify.app/")
              }
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img4} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">
              getLinked- An hackathon registration App
            </h2>
            <p className="p1-text">
              The innovative platform streamlines the registration process.
              Allowing Tech enthusiasts, coders, and innovators to effortlessly
              join the next big hackathon.
            </p>
            <p className="p1-text">
              Technologies used: ReactJs and vanilla CSS
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/AjokeCode/getlinked")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() => handleURL("https://getlinked-zeta.vercel.app/")}
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img5} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">Mapit- Exercises Tracking App</h2>
            <p className="p1-text">Personal Fitness Navigator App</p>
            <p className="p1-text">
              Technologies used: HTML, CSS and Javascript
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/AjokeCode/mapty-project")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://trackyouractivities.netlify.app/")
              }
            >
              Live link
            </a>
          </div>
        </div>
        <div className="project-1">
          <div
            className="project-left"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src={img6} alt="bds" className="project-img" />
          </div>
          <div
            className="project-right"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h2 className="p1-header">GamGleam- An E-Commerce App</h2>
            <p className="p1-text">Shop smart! Shop easy.</p>
            <p className="p1-text">
              Technologies used: ReactJs and vanilla CSS
            </p>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://github.com/AjokeCode/E-commerce-app")
              }
            >
              Github link
            </a>
            <a
              className="p1-text2"
              href=""
              onClick={() =>
                handleURL("https://e-commerce-app-eight-zeta.vercel.app/")
              }
            >
              Live link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
