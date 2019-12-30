import anecdoteService from '../services/anecdotes'

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
  const updatedObj = {...anecdote, votes: anecdote.votes + 1}
  const updatedAnecdote = await anecdoteService.updateAnecdote(updatedObj)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })    
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes.sort(
        (a,b) => b.votes - a.votes)
    })    
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