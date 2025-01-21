import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

import LandingPage from '@/components/LandingPage';
import AboutPage from '@/components/AboutPage';
import RegisterPage from '@/components/RegisterPage';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Toaster position='bottom-center' />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
