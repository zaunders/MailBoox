import React from 'react'
import ReactDOM from 'react-dom'
import { compact } from 'lodash'
import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import { connect } from './utils/hc-web-client'
import { holochainMiddleware } from '@holochain/hc-redux-middleware'
import distrolibApp from './reducers'
import Root from './Root'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

// this url should use the same port set up the holochain container
const url = 'ws:localhost:3400'
const hcWc = connect(url)

const middleware = compact([
  holochainMiddleware(hcWc)
])
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(distrolibApp, undefined, composeEnhancers(applyMiddleware(...middleware)))

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
registerServiceWorker()
