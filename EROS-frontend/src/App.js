import './App.css';
// import Card from './components/Cards';

// import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CorporateCollection from './pages/Corporate/components/CorporateCollections';
import AboutUs from './pages/About us/AboutUs';
import ContactUs from './pages/Contact us/ContactUs';
// import BulkInquiry from './pages/Bulk Inquiry/BulkInquiry';
import Layout from './components/Layout';
import EcommerceLayout from './pages/Shop/components/EcommerceLayout';
// import LeftSidebar from './pages/Shop/components/LeftSideBar';
// import PromosSection from './pages/Shop/components/PromosSection';
// import BestSeller from './components/BestSellers/BestSeller';
// import BestSellers from './pages/Shop/components/BestSellers';
// import CategoryProducts from './pages/Shop/components/CategoryProducts';
// import TopBar from './pages/Shop/components/TopBar';
// import CartSidebar from './pages/Shop/components/CartSidebar';
// import NavBar_Footer from './components/Navbar/NavBar_New';
import Login from "./pages/Form/Login";
import Signup from "./pages/Form/SignUp";
import ForgotPassword from "./pages/Form/ForgotPassword";
import OTPVerification from "./pages/Form/OtpVerification";
import Online from './pages/Online/Online';

function App() {
  return (
    // <div className="App">
    //   {/* <Navbar />
    //   <Slider />
    //   <Hygen />
    //   <Card />
    //   <Section />
    //   <Our_Collection />
    //   <Footer /> */}
    //   <NavBar_Footer />
    // </div>

    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<EcommerceLayout />} /> {/* ✅ Replaced Shop with EcommerceLayout */}
          <Route path='/corporate' element={<CorporateCollection />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/online' element={<Online />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
