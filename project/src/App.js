import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import MainPage from './components/Pages/MainPage/MainPage';
import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';
import Post from './components/Post/Post';
// services components
import Services from './components/Services/Services';
import Walk from './components/Services/Walk'
import Grooming from './components/Services/Grooming'
import Other from './components/Services/Other'

import About from './components/About/About';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';

function App() {
  return (
   <div className='container'>
     <Navbar/>
     <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='sign' element={<NavbarAfter/>}/>
        <Route path='post' element={<Post/>}/>

        <Route path='services' element={<Services/>}/>
        <Route path='services'>
          <Route path='walking' element={<Walk/>}/>
          <Route path='grooming' element={<Grooming/>}/>
          <Route path='other' element={<Other/>}/>
        </Route>

        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profile/edit' element={<EditProfile/>}/>
     </Routes>
   </div>
  );
}

export default App;
