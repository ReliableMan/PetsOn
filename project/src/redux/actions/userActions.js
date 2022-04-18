// сохраняем юзера
export const setUser = (data) => {
  return { type: 'SET_USER', payload: data }
}
// юзер печатает в регистрации, отлавливаем изменения
export const userTyping = (myEvent) => {
  return { type: 'USER_TYPING', payload: { [myEvent.target.name]: myEvent.target.value } }
}
// юзер печатает в авторизации, отлавливаем изменения
export const userTypingLogin = (e) => {
  return { type: 'USER_LOGIN_TYPING', payload: { [e.target.name]: e.target.value } }
}
// очищаем инпуты
export const clearInputs = () => {
  return { type: 'CLEAR_INPUTS', payload: {} }
}

// сохраняем специальность
export const specInputs = (item) => {
  return {type: 'SET_SPEC', payload: item}
}

// проверка на авторизованность
export const setAuthorized = () => {
  return { type: 'AUTHORIZED' }
}
export const setNotAuthorized = () => {
  return { type: 'NOT_AUTHORIZED' }
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
  const req = await fetch ('http://localhost:3903/auth/signout', {
    method: 'GET', 
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  dispatch(setNotAuthorized())
}

