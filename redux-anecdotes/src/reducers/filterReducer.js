// ==== ACTIONS ====
export const filterAnecdotes = (text) => {
  return {
    type: 'FILTERED',
    text
  }
}



// ==== REDUCER ====
const filterReducer = (state = 'ALL', action) => {
  
  switch (action.type){
    case 'FILTERED':
      return action.text.toLowerCase()
    
    default:
      return state
  } 
}

export default filterReducer