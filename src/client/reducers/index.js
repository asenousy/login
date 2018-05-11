import { combineReducers } from 'redux'
import isLoggedInReducer from './isLoggedInReducer'
import bookListReducer from './bookListReducer'

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  bookList: bookListReducer
})

export default rootReducer
