import About from './components/about/about';
import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import Project from './components/project/project';
// import ParticlesBackground from './components/particles';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
