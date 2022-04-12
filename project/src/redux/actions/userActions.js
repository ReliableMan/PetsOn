export const setUser = (data) => {
  return {type: 'SET_USER', payload: data}
}

export const userTyping = (myEvent) => {
  return { type: 'USER_TYPING', payload: { [myEvent.target.name]: myEvent.target.value } }
}

export const clearInputs = () => {
  return {type: 'CLEAR_INPUTS', payload: {}}
}

export const submitUser = (e) => async(dispatch) => {
  const userRequest = await fetch('http://localhost:3903/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(e)
  });
  const userFromBack = await userRequest.json();
  console.log(userFromBack);
  dispatch(setUser(userFromBack));
}

