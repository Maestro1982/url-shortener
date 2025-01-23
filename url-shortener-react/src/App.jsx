import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

import LandingPage from '@/pages/LandingPage';
import AboutPage from '@/pages/AboutPage';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import DashboardLayout from '@/components/dashboard/DashboardLayout';

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
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<DashboardLayout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
