import './App.css'
import React, { useEffect } from 'react'
import Header from './Header/header'
import Footer from './Footer/Footer'
import Home from './home'
import Faq from './faq'
import Clients from './clients'
import Contact from './contact'
import Login from './login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Booking from './booking'
import MyBooking from './my-booking'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MyProfile from './my-profile'
import { initGA, logPageView } from './analytics'
import ResetPassword from './reset-pass'
import ForgetPassword from './forget-pass'
import Prospectus from './prospectus'
import ReactGA from 'react-ga'
import PrivacyPolicy from './privacy-policy'
import InitializeGoogleAnalytics from './utils/google-analytics/google-analytics'

function App() {
  // useEffect(() => {
  //   // Initialize Google Analytics
  //   initGA();
  //   // Log the initial pageview
  //   logPageView();
  // }, []);

  // ReactGA.initialize("G-GG8E1NJPG0");
  // ReactGA.pageview(window.location.pathname + window.location.search);

  // console.log("HITTT")

  const location = useLocation()
  useEffect(() => {
    InitializeGoogleAnalytics()
  }, [location])
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='faqs' element={<Faq />} />
        <Route exact path='clients' element={<Clients />} />
        <Route exact path='contact' element={<Contact />} />
        <Route exact path='get-quote' element={<Booking />} />
        <Route exact path='my-booking' element={<MyBooking />} />
        <Route exact path='my-profile' element={<MyProfile />} />
        <Route exact path='login' element={<Login />} />
        <Route exact path='forget-password' element={<ForgetPassword />} />
        <Route exact path='/reset-password/:token' element={<ResetPassword />} />
        <Route exact path='prospectus' element={<Prospectus />} />
        <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
