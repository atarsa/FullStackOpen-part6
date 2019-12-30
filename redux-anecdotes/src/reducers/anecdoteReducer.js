// ==== ACTIONS ====
export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}


const anecdoteReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      ).sort((a,b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: 
      return state
  }
}

export default anecdoteReducer