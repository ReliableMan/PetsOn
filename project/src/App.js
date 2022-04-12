// import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './Pages/MainPage/MainPage';

import './App.css';

function App() {
  return (
   <div className='container'>
     <Navbar/>
     {/* <Routes> */}
    {/* <Route path='/' element={<MainPage/>}/> */}
    <MainPage/>
     {/* </Routes> */}
   </div>
  );
}

export default App;
