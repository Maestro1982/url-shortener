import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PrivateRoute from '@/PrivateRoute';

import LandingPage from '@/pages/LandingPage';
import AboutPage from '@/pages/AboutPage';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import ShortenUrlPage from '@/pages/ShortenUrlPage';
import ErrorPage from '@/pages/ErrorPage';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import DashboardLayout from '@/components/dashboard/DashboardLayout';

const AppRouter = () => {
  const hideHeaderFooter = location.pathname.startsWith('/s');
  return (
    <>
      {!hideHeaderFooter && <NavBar />}
      <Toaster position='bottom-center' />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/s/:url' element={<ShortenUrlPage />} />

        <Route
          path='/register'
          element={
            <PrivateRoute publicPage={true}>
              <RegisterPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PrivateRoute publicPage={true}>
              <LoginPage />
            </PrivateRoute>
          }
        />

        <Route
          path='/dashboard'
          element={
            <PrivateRoute publicPage={false}>
              <DashboardLayout />
            </PrivateRoute>
          }
        />
        <Route path='/error' element={<ErrorPage />} />
        <Route
          path='*'
          element={
            <ErrorPage message="We can't seem to find the page you're looking for" />
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};
export default AppRouter;

export const SubDomainRouter = () => {
  return (
    <Routes>
      <Route path='/:url' element={<ShortenUrlPage />} />
    </Routes>
  );
};
