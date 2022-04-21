import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import Context from './components/context';
import './index.css';
import App from './App';

// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

// const AllForGoogle = () => {
// const [isAuth, setAuth] = React.useState(false);
//   const [user, setUser] = React.useState('');

//   const setAuthorization = (isAu = false) => {
//     setAuth(isAu);
//   };

//   const setUserName = (name = '') => {
//     setUser(name);
//   }
//   React.useEffect(() => {
//     (async () => {
//       try {
//         const isAuth = await (await fetch('/api/auth/check')).json();
//         setAuth(isAuth.session);
//         setUser(isAuth.user);
//       } catch ({message}) {
//         console.log('Err: ', message);
//       }
//     })();
//   }, []);

//   console.log('user: ', user);
//   console.log('isAuth: ', isAuth)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    {/* <Context.Provider */}
        {/* value={{
          isAuth: isAuth,
          setAuth: setAuthorization,
          user: user,
          setUser: setUserName,
        }} */}
      {/* > */}
      <App />
      {/* </Context.Provider> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// };

// export default AllForGoogle;
