export const success = () => {
  return {
    type: 'SUCCESS',
    message: 'Anecdote added successfully'
  }
}

const notificationReducer = (state = 'Anecdote added', action) => {
  switch (action.type) {
    case 'SUCCESS':
      return action.message
    default:
      return state
  }
}



export default notificationReducer