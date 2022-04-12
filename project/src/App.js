import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './Pages/MainPage/MainPage';
import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';

function App() {
  return (
   <div className='container'>
     <Navbar/>
     <Routes>
          <Route path='sign' element={<NavbarAfter/>}/>
     </Routes>
   </div>
  );
}

export default App;
