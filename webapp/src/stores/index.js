import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from '../reducers'

const appStore = createStore(
  appReducer,
  applyMiddleware(thunk)
)

export default appStore
