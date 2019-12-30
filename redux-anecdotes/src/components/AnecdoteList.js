import React from 'react'

import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.store.getState().ancecdotes

  const vote = (id) => {
    props.store.dispatch(voteFor(id))
  }
  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList