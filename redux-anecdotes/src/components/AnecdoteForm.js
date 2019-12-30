import React from 'react'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.store.dispatch(createAnecdote(content))
    props.store.dispatch(addAnecdoteNotification(content))
    event.target.anecdote.value = ''

    // hide notification after 5 sec
    setTimeout(() => {
      props.store.dispatch(hideNotification())
    }, 5000)

  }
  return(
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )

}

export default AnecdoteForm