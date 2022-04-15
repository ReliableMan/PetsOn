export const setUser = (data) => {
  return { type: 'SET_USER', payload: data }
}

export const userTyping = (myEvent) => {
  return { type: 'USER_TYPING', payload: { [myEvent.target.name]: myEvent.target.value } }
}

export const userTypingLogin = (e) => {
  return { type: 'USER_LOGIN_TYPING', payload: { [e.target.name]: e.target.value } }
}

export const clearInputs = () => {
  return { type: 'CLEAR_INPUTS', payload: {} }
}


export const specInputs = (item) => {
  return {type: 'SET_SPEC', payload: item}
}

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
}

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
}

// UPDATE USER DATA IN PROFILE
export const userUpdatingData = (e) => {
  return { type: 'USER_UPDATING_DATA', payload: { [e.target.name]: e.target.value } }
}

// export const updateUser 

