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
    const arrays = [], size = 4
    this.props.books.unshift('new')
    while (this.props.books.length > 0)
      arrays.push(this.props.books.splice(0, size))

    return (
      <div>
        {arrays.map((set, i) => <LibraryRow first={i === 0} books={set} key={i} />)}
      </div>
    )
  }
}

class LibraryRow extends Component {
  render = () => {
    return (
      <div className="row">
        {this.props.books.map((b, i) => {
          if (this.props.first && i === 0) {
            return <NewBook key={i} />
          } else {
            return <Book key={i} book={b} />
          }
        })}
      </div>
    )
  }
}

class NewBook extends Component {
  render = () => {
    return (
      <div className="col-3 book-image">
        <Link to="/new" className="inner-book-image new-book">
          Add Book
        </Link>
      </div>
    )
  }
}

export default Library
