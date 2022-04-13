import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Pages/MainPage/MainPage';
import NavbarAfter from './components/Navbar/NavbarAfter';
import './App.css';
import Post from './components/Post/Post';
import About from './components/About/About';
import Profile from './components/Account/Profile';
import Grooming from './components/Services/Grooming';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='sign' element={<NavbarAfter />} />
        <Route path='post' element={<Post />} />
        <Route path='services' element={<Grooming />} />
        <Route path='about' element={<About />} />
        <Route path='account' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
