import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import MainPage from './components/Pages/MainPage/MainPage';
// import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';
import Post from './components/Post/Post';
// services components
import Services from './components/Services/Services';

import About from './components/About/About';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import FindServ from './components/Pages/FindServ/FindServ';
import Registration from './components/ModalAuth&Reg/Registration';
import Authentificate from './components/ModalAuth&Reg/Authentificate';


function App() {
  return (
   <div className='container'>
     <Navbar/>
     <Routes>
     
        <Route path='/' element={<MainPage />} />
        <Route path='findServ' element={<FindServ />} />

        <Route path='sign' element={<Registration/>}/>
  
          <Route path='signIn' element={<Authentificate/>}/>
        

        <Route path='post' element={<Post/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profile/edit' element={<EditProfile/>}/>
     </Routes>
   </div>
  );
}

export default App;
