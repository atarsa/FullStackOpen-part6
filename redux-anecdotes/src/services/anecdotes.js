import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const respone = await axios.get(baseUrl)
  return respone.data
}

const createNew = async content => {
  const object = { content, votes: 0 }
  const respone = await axios.post(baseUrl, object)
  return respone.data
}

// const voteOnAnecdote = async (id, newObject) => {
//   const response = await axios.put(`${baseUrl}/${id}`, newObject)
//   return response.data
// }

export default { 
  getAll,
  createNew
}