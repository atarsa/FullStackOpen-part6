import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

import { createAnecdote } from './reducers/anecdoteReducer'
import { addAnecdoteNotification} from './reducers/notificationReducer'

const reducer = combineReducers({
  ancecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer)


store.subscribe(() => console.log(store.getState()))
// store.dispatch(createAnecdote('That is new anecdote'))
// store.dispatch(addAnecdoteNotification('That is new anecdote'))




const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)