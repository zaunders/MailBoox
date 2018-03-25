import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import LibraryContainer from './LibraryContainer'
import BookContainer from './BookContainer'

class App extends Component {
  componentWillMount () {
    this.interval = setInterval(this.props.getHandles, 2000)
  }

  componentWillUnmount () {
    if (this.interval) clearInterval(this.interval)
  }

  render () {
    return (
      <div className='container'>
          <Route path='/' exact component={LibraryContainer} />
          <Route path='/books/:hash' exact component={BookContainer} />
      </div>
    )
  }
}

export default App
