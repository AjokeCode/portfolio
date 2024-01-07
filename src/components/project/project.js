import './project.css';
import img1 from './BDS.PNG';
import img2 from './empylo.PNG';
import img3 from './natour.PNG';
import img4 from './getlinked.PNG';
import img5 from './trackit.PNG'

const Project =()=>{
    const handleURL =(url)=>{
        window.open(url, '_blank')
    }
    return(
        <div className="project" id='project'>
            <h1 className='project-header'>
                Projects have built
            </h1>
            <div className="projects">
                <div className='project-1'>
                    <div className='project-left'>
                    <img src={img1} alt='bds' className='project-img'/></div>
                    <div className='project-right'>
                        <h2 className='p1-header'>BlueDevtech Solutions</h2>
                        <p className='p1-text'>BlueDevTech Solution is an Employment hub for online learning and internship.</p>
                        <p className='p1-text'>Technologies used: Reactjs and vanilla css</p>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://github.com/AjokeCode/bluedevtechsolutions')}>Github link</a>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://www.bluedevtechsolution.com.ng/')}>Live link</a>
                    </div>
                </div>
                <div className='project-1'>
                    <div className='project-left'>
                    <img src={img2} alt='bds' className='project-img'/></div>
                    <div className='project-right'>
                        <h2 className='p1-header'>Empylo- A mental health App</h2>
                        <p className='p1-text'>A responsive React App built for a psychological  company in London.</p>
                        <p className='p1-text'>Technologies used: Reactjs and vanilla css</p>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://github.com/AjokeCode/Empylo')}>Github link</a>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://empylo.vercel.app/')}>Live link</a>
                    </div>
                </div>
                <div className='project-1'>
                    <div className='project-left'>
                    <img src={img3} alt='bds' className='project-img'/></div>
                    <div className='project-right'>
                        <h2 className='p1-header'>Natours- Explore the Nature</h2>
                        <p className='p1-text'>A responsive landing page for a non-existing company.</p>
                        <p className='p1-text'>Technologies used: HTML and SASS(CSS preprocessor)</p>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://github.com/AjokeCode/Natour')}>Github link</a>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://explore-the-nature.netlify.app/')}>Live link</a>
                    </div>
                </div>
                <div className='project-1'>
                    <div className='project-left'>
                    <img src={img4} alt='bds' className='project-img'/></div>
                    <div className='project-right'>
                        <h2 className='p1-header'>getLinked- An hackathon registration App</h2>
                        <p className='p1-text'>The innovative platform streamlines the registration process. Allowing Tech enthusiasts, 
                        coders, and innovators to effortlessly join the next big hackathon.</p>
                        <p className='p1-text'>Technologies used: ReactJs and vanilla CSS</p>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://github.com/AjokeCode/getlinked')}>Github link</a>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://getlinked-zeta.vercel.app/')}>Live link</a>
                    </div>
                </div>
                <div className='project-1'>
                    <div className='project-left'>
                    <img src={img5} alt='bds' className='project-img'/></div>
                    <div className='project-right'>
                        <h2 className='p1-header'>Mapit- Exercises Tracking App</h2>
                        <p className='p1-text'>Personal Fitness Navigator App</p>
                        <p className='p1-text'>Technologies used: HTML, CSS and Javascript</p>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://github.com/AjokeCode/mapty-project')}>Github link</a>
                        <a className='p1-text2' href='' onClick={()=> handleURL('https://trackyouractivities.netlify.app/')}>Live link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;