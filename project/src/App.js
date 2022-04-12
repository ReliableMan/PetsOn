import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Pages/MainPage/MainPage';
import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';
import Post from './components/Post/Post';
import Services from './components/Services/Services'
import About from './components/About/About';
import Account from './components/Account/Account';

function App() {
  return (
   <div className='container'>
     <Navbar/>
     <Routes>
          <Route path='sign' element={<NavbarAfter/>}/>
          <Route path='post' element={<Post/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='account' element={<Account/>}/>
     </Routes>
     <MainPage/>
   </div>
  );
}

export default App;
