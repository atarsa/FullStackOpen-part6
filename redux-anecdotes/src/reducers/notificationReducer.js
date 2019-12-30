// ==== ACTIIONS ====
export const addAnecdoteNotification = (text) => {
  return {
    type: 'ADD_ANECDOTE',
    message: `Anecdote "${text}" added successfully.`
  }
}

export const votedForNotification = (text) => {
  return {
    type: 'VOTE_ANECDOTE',
    message: `You voted on "${text}" anecdote.`
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION',
    message: null
  }
}


// ==== REDUCER ====

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_ANECDOTE':
      return action.message
    case 'VOTE_ANECDOTE':
      return action.message
    case 'HIDE_NOTIFICATION':
      return action.message
    default:
      return state
  }
}



export default notificationReducer