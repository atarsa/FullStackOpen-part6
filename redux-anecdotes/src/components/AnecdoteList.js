import React from 'react'

import { voteFor } from '../reducers/anecdoteReducer'
import { votedForNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.store.getState().ancecdotes

  const vote = (id, text) => {
    props.store.dispatch(voteFor(id))
    props.store.dispatch(votedForNotification(text))
    // hide notification after 5 sec
    setTimeout(() => {
      props.store.dispatch(hideNotification())
    }, 5000)
  }

  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      </div>
    )
  )
}

export default AnecdoteList