import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import MainPage from './components/Pages/MainPage/MainPage';
// import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';
import Post from './components/Post/Post';
// services components
import Services from './components/Services/Services';
import Walk from './components/Services/Walk'
import Grooming from './components/Services/Grooming'
import Vet from './components/Services/Vet'
import Other from './components/Services/Other'

import About from './components/About/About';
import Profile from './components/Profile/Profile';
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
        <Route path='services'>
          <Route path='walking' element={<Walk/>}/>
          <Route path='grooming' element={<Grooming/>}/>
          <Route path='vet' element={<Vet/>}/>
          <Route path='other' element={<Other/>}/>
        </Route>

        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}/>
     </Routes>
   </div>
  );
}

export default App;
