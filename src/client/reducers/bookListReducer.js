export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return action.payload
  }
  return state
}
