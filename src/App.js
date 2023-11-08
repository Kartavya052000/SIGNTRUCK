import './App.css';
import Header from './Header/header';
import Footer from './Footer/Footer';
import Home from './home';
import Faq from './faq';
import Clients from './clients';
import Contact from './contact';
import Login from './login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";   
import Booking from './booking';
import MyBooking from './my-booking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='faq' element={<Faq />} />
          <Route exact path='clients' element={<Clients />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='booking' element={<Booking />} />
          <Route exact path='my-booking' element={<MyBooking />} />
          <Route exact path='login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />

    </div>
  );
}

export default App;
