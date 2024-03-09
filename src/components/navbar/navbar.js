import { Link } from "react-scroll";
import './navbar.css';
import { useState } from "react";
import img from './4.png';
import { BsListNested } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = ()=>{
    const [navbar, setNavbar] = useState(false);
    const [isClick, setIsClick]= useState(false);
    function handleScroll() {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    
    
    return (
        <>        
        <div className={navbar ? "navbar active" : "navbar"}>
            <div className="navbar-left">
            <img src={img} alt='img' className="navbar-left-img"/>
            <h1 className="navbar-left-header">Ajoke_Code</h1>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="home" spy={true} smooth={true}  duration={500} className="navbar-link">Home</Link></li>
                <li className="navbar-item"><Link to="about" spy={true} smooth={true} offset={-150} duration={500} className="navbar-link">About</Link></li>
                <li className="navbar-item"><Link to="project" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link">Projects</Link></li>
                <li className="navbar-item"><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="navbar-link">Contact me</Link></li>
            </ul>
            
            <BsListNested
              className={`${isClick ? 'none' : ''} open`}
              onClick={() => setIsClick(true)} />
      {
        isClick ? (
          <div className='ham-div'>
            <AiOutlineClose className="close" onClick={() => setIsClick(false)} />
            <ul className="navbar-lists">
            <li className="navbar-items" ><Link to="home" spy={true} smooth={true}  duration={500} className="navbar-links">Home</Link></li>
            <li className="navbar-items"><Link to="about" spy={true} smooth={true} offset={-150} duration={500} className="navbar-links">About</Link></li>
            <li className="navbar-items"><Link to="project" spy={true} smooth={true} offset={-100} duration={500} className="navbar-links">Projects</Link></li>
            <li className="navbar-items"><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="navbar-links">Contact me</Link></li>
            </ul>
        </div>
        ) : (<></>)
      }
      </div>
      </>
)
}
export default Navbar;

