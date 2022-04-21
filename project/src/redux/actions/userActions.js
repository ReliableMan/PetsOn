
// сохраняем юзера
export const setUser = (data) => {
  return { type: 'SET_USER', payload: data }
}

export const setService = (data) => {
  return { type: 'SET_SERVICE', payload: data }
}

export const userTyping = (myEvent) => {
  return { type: 'USER_TYPING', payload: { [myEvent.target.name]: myEvent.target.value } }
}

export const userTypingService = (item) => {
  return { type: 'USER_TYPING_SERVICE', payload: { [item.target.name]: item.target.value } }
}

export const userTypingLogin = (e) => {
  return { type: 'USER_LOGIN_TYPING', payload: { [e.target.name]: e.target.value } }
}
// очищаем инпуты
export const clearInputs = () => {
  return { type: 'CLEAR_INPUTS', payload: {} }
}

export const clearInputsServices = () => {
  return { type: 'CLEAR_INPUTS_SERVICES', payload: {} }
}

// сохраняем специальность
export const specInputs = (item) => {
  return { type: 'SET_SPEC', payload: item }
}

// проверка на авторизованность
export const setAuthorized = () => {
  return { type: 'AUTHORIZED' }
}
export const setNotAuthorized = () => {
  return { type: 'NOT_AUTHORIZED' }
}

export const userUpdateService = (e) => {
  console.log(e.target.name, '77777777777');
  return { type: 'USER_TYPING_SERVICE', payload: { [e.target.name]: e.target.value } }
}

export const setUserService = (e) => {
  return { type: 'SET_SERVICE', payload: e }
}

export const clearUserUpdateServices = () => {
  return { type: 'CLEAR_INPUTS_USER_SERVICES', payload: {} }
}

// ----------------------------dark mode or sun mode

export const sunMode = () => {
  // console.log(1)
  return { type: "SUN"}
}

export const moonMode = () => {
  // console.log(2)
  return { type: "MOON"}
}



// отправляем на бэк на нужную ручку, опять сетим(или сохраняем юзера)__регистрация 
export const submitUser = (e) => async (dispatch) => {

  const userRequest = await fetch('http://localhost:3903/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  const userFromBack = await userRequest.json();
  console.log(userFromBack);
  dispatch(setUser(userFromBack));
  dispatch(setAuthorized())
}

// отправляем на бэк на нужную ручку, опять сетим(или сохраняем юзера)__авторизация
export const submitUserLogin = (e) => async (dispatch) => {
  console.log('eee', e)
  const userRequest2 = await fetch('http://localhost:3903/auth/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  const userLoginFromBack = await userRequest2.json();
  console.log('1212', userLoginFromBack);
  dispatch(setUser(userLoginFromBack))
  dispatch(setAuthorized())
}

// UPDATE USER DATA IN PROFILE
export const userUpdatingData = (e) => {
  return { type: 'USER_UPDATING_DATA', payload: { [e.target.name]: e.target.value } }
}

// выход юзера 
export const logoutUser = (e) => async (dispatch) => {
  const req = await fetch('http://localhost:3903/auth/signout', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  dispatch(setNotAuthorized())
}


export const serviceSent = (e) => async (dispatch) => {
  const serviceReq = await fetch('http://localhost:3903/services/new', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  const serviceFromBack = await serviceReq.json();
  console.log('serviceFromBack', serviceFromBack);
  dispatch(setService(serviceFromBack))
};


export const updateUser = (e, id) => async (dispatch) => {
  //console.log('update user', e)
  //const { id } = useParams();
  
  const userUpdate = await fetch(`http://localhost:3903/users/profile/${id}/edit`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
    'Content-type': 'application/json'
  },
    body: JSON.stringify(e)
  });
  dispatch(setNotAuthorized())
  dispatch(clearUserUpdateServices())
}

