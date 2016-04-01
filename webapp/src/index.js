import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { App } from './components/App'

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('main')
)
