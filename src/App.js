
import './App.css';
import About from './Components/About';
import Cards from './Components/Cards';
import Eyes from './Components/Eyes';
import FeaturedProjects from './Components/FeaturedProjects';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import Navbar from './Components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  return (
    <div className="w-full min-h-screen  bg-zinc-900  text-white ">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
