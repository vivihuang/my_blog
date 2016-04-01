import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/App'
import appStore from './stores'

const history = syncHistoryWithStore(browserHistory, appStore)

ReactDom.render(
  <Provider store={appStore}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
