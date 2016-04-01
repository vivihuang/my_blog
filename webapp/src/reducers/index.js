import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import _ from 'lodash'

const fetchData = (state = [], action) => {
  switch (action.type) {
    case 'fetch':
      return _.isUndefined(action.data) ? state : action.data
    default:
      return state
  }
}

const appReducer = combineReducers({
  fetchData,
  routing: routerReducer
})

export default appReducer
