import React from 'react'
import { connect } from 'react-redux'

import { voteFor } from '../reducers/anecdoteReducer'
import { votedForNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteFor(anecdote)
    props.votedForNotification(anecdote.content)
    // hide notification after 5 sec
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
  }

  return (
   props.visibleAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )
  )
}

const anecdotesToShow = ({anecdotes, filter}) => {
    
  if ( filter === 'ALL') {
    return anecdotes
  }
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteFor,
  votedForNotification,
  hideNotification
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)