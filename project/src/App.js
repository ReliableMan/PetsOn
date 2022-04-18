import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//  const API_KEY = process.env.REACT_APP_API_KEY;
//  console.log(API_KEY);

import Navbar from './components/Navbar/Navbar';
// import NavbarAfter from './components/Navbar/NavbarAfter';
import MainPage from './components/Pages/MainPage/MainPage';
import './App.css';
import Post from './components/Post/Post';
// user components
import Registration from './components/ModalAuth&Reg/Registration';
import Authentificate from './components/ModalAuth&Reg/Authentificate';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
// services components
import Services from './components/Services/Services';
import FindServ from './components/Pages/FindServ/FindServ';
// posts components
import Dog from './components/Post/Dog';
import Cat from './components/Post/Cat';
import CatId from './components/Post/CatId';
import DogId from './components/Post/DogId';

// about component
import About from './components/About/About';

import Vet from './components/Services/Vet';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <div className='container'>
      <Navbar />
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
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
        <Route path='vet' element={<Vet />} />
        <Route path='findServ' element={<FindServ />} />
        {/* ABOUT */}
        <Route path='about' element={<About />} />
      </Routes >
    </div >

  );
}

export default App;
