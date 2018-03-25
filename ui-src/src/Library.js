import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Library extends Component {
  componentWillMount () {
    this.props.getBooks()
    this.interval = setInterval(this.props.getBooks, 2000)
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
        {this.props.books.map((b, i) => {
          return (
            <Book key={i} book={b} />
          )
        })}
      </div>
    )
  }
}

class Book extends Component {
  render = () => {
    const { name, author, genre, blurb } = this.props.book
    // <img width={430/3} height={645/3} src={this.props.book} />
    return (
      <div className="col-3 book-image">
        <div className="inner-book-image">
          <p className="book-name">{name}</p>
          <p className="book-author">{author}</p>
          <p className="book-genre">{genre}</p>
        </div>
      </div>
    )
  }
}

export default Library
