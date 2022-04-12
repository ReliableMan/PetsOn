export const setUser = (data) => {
  return {type: 'SET_USER', payload: data}
}

export const userTyping = (myEvent) => {
  return { type: 'USER_TYPING', payload: { [myEvent.target.name]: myEvent.target.value } }
}

export const clearInputs = () => {
  return {type: 'CLEAR_INPUTS', payload: {}}
}

export const submitUser = () => {
  
}
