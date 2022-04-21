
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
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
import { useSelector } from 'react-redux';
// import { Route, Link, Switch, Redirect, useLocation } from 'react-router-dom';
// import Context from './components/context';




function App() {
  
  const booleanAuthorized = useSelector((store) => store.isAuthorized);

  return (
    <div className='container'>
      <Navbar />
      {booleanAuthorized ?
        // - true   
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='users/profile/:id' element={<Profile />} />
          <Route path='users/profile/:id/edit' element={<EditProfile />} />
          {/* POSTS */}
          {/* SERVICES */}
          <Route path='services' element={<Services />} />
          <Route path='vet' element={<Vet />} />
          <Route path='findServ' element={<FindServ />} />
          {/* ABOUT */}
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Post />} />
          <Route path='posts/cats' element={<Cat />} />
          <Route path='posts/cats/:id' element={<CatId />} />
          <Route path='posts/dogs' element={<Dog />} />
          <Route path='posts/dogs/:id' element={<DogId />} />
          <Route path='signup' element={<Registration />} />
          <Route path='login' element={<Authentificate />} />
        </Routes >
        :
        // - false
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='posts' element={<Post />} />
          <Route path='posts/cats' element={<Cat />} />
          <Route path='posts/cats/:id' element={<CatId />} />
          <Route path='posts/dogs' element={<Dog />} />
          <Route path='posts/dogs/:id' element={<DogId />} />
          <Route path='signup' element={<Registration />} />
          <Route path='login' element={<Authentificate />} />
        </Routes >
      }
    </div >
  );
}

export default App;
