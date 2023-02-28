import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNavbar';
import Packages from './pages/Packages';
import SinglePackage from './pages/singlePackage'

function App() {
  return (
     <Router>
      <TopNav/>
        <Navbar/>
        
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='packages' element={<Packages />} />
          <Route path='packages/:id' element={<SinglePackage />} />
           
          {/*<Route path='error' element={<Error />} /> */}
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
