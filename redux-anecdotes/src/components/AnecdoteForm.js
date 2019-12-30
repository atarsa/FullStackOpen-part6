import React from 'react'
import { connect } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
  
  const addAnecdote =  async(event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)
    
    props.addAnecdoteNotification(content)
    
    // hide notification after 5 sec
    setTimeout(() => {
      props.hideNotification()
    }, 5000)

  }
  return(
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  )

}



const mapDispatchToProps = {
  createAnecdote,
  addAnecdoteNotification,
  hideNotification
}
export default connect(
  null,
  mapDispatchToProps
)(NewAnecdote)