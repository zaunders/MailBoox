import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Library extends Component {
  componentWillMount () {
    this.props.getBooksFunction()
    this.interval = setInterval(this.props.getBooksFunction, 1000)
  }

  componentWillUnmount () {
    if (this.interval) clearInterval(this.interval)
  }

  render = () => {
    return (
      <div className="row">
        <div className="col-3 book-image">
          <Link to="/new" className="inner-book-image new-book">
            Add Book
          </Link>
        </div>
        {this.props.books.map((b, i) => <Book key={i} book={b} />)}
      </div>
    )
  }
}

export default Library
