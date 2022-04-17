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

import Dog from './components/Post/Dog';
import Cat from './components/Post/Cat';
import CatId from './components/Post/CatId';
import DogId from './components/Post/DogId';
import Registration from './components/ModalAuth&Reg/Registration';
import Authentificate from './components/ModalAuth&Reg/Authentificate';



function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>

        <Route path='/' element={<MainPage />} />
        {/* USER */}
        <Route path='signup' element={<Registration />} />
        <Route path='login' element={<Authentificate />} />
        <Route path='users/profile/:id' element={<Profile />} />
        <Route path='users/profile/:id/edit' element={<EditProfile />} />
        {/* POSTS */}
        <Route path='posts' element={<Post />} />
        <Route path='posts/cats' element={<Cat />} />
        <Route path='posts/cats/:id' element={<CatId />} />
        <Route path='posts/dogs' element={<Dog />} />
        <Route path='posts/dogs/:id' element={<DogId />} />
        {/* SERVICES */}
        <Route path='services' element={<Services />} />
        <Route path='findServ' element={<FindServ />} />
        {/* ABOUT */}
        <Route path='about' element={<About />} />
      </Routes >
    </div >
  );
}

export default App;
