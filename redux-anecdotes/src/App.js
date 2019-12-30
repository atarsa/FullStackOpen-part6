import React from 'react';

import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {

  const store = props.store
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter store={store} />
      <Notification store={store} />
      <AnecdoteForm store={store} />
      <AnecdoteList store={store} />
   </div>
  )
}

export default App