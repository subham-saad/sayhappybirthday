import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Registeration from './components/Registeration';
import Backdrop from './components/Backdrop';
import BirthdayCan from './components/BirthdayCan';
import Vibe from './components/Vibe';
import MoreAbout from './components/MoreAbout';
import CreateSong from './components/CreateSong';
import ContractingImage from './components/ContractingImage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [song, setSong] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(false);
      setSong(true)
    }, 7000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <div className='relative z-0 '>
      {isMenuOpen && <Backdrop onClick={() => setIsMenuOpen(false)} />}
      {!showLandingPage &&<NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}  toggleMenu={ toggleMenu} /> }    
       <Routes>
           {showLandingPage && <Route path="/" element={<LandingPage />} />}
           {!showLandingPage && <Route path="/" element={<Registeration />} />}
           <Route path='/birthday-can' element={<BirthdayCan />} />
           <Route path='/vibe' element={<Vibe />} />
            <Route path="/more" element={<MoreAbout />} />
           <Route path="/song" element={<CreateSong />} />
          {song && <Route path="/contracting" element={<ContractingImage />} /> }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
