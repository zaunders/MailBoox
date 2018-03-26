import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Library extends Component {
  componentWillMount () {
    this.props.getBooksFunction()
    //this.interval = setInterval(this.props.getBooksFunction, 1000)
  }

  componentWillUnmount () {
    if (this.interval) clearInterval(this.interval)
  }

  render = () => {
    const rows = [], columns = 4
    // break the books into groups of 4, for putting into rows
    const bookArray = Array.from(this.props.books)
    bookArray.unshift({}) // new book
    while (bookArray.length > 0) {
      rows.push(bookArray.splice(0, columns))
    }

    let setWithSelectedIndex, selectedBook
    if (this.props.selectedBook) {
      rows.forEach((set, index) => {
        let found = set.find(b => b.hash === this.props.selectedBook)
        if (found) {
          setWithSelectedIndex = index
          selectedBook = found
        }
      })
      // insert the 'selectedBook' row after the row with the selectedBook
      if (setWithSelectedIndex >= 0) rows.splice(setWithSelectedIndex + 1, 0, selectedBook)
    }

    return (
      <div>
        {rows.map((row, i) => {
            if (setWithSelectedIndex >= 0 && i === setWithSelectedIndex + 1) {
              return <SelectedBookRow book={row} />
            } else {
              return <LibraryRow onBookClick={this.props.selectBook} first={i === 0} books={row} key={i} />
            }
        })}
      </div>
    )
  }
}

class SelectedBookRow extends Component {
  render = () => {
    const { author, name, genre, blurb } = this.props.book
    return (
      <div className="row library-row">
        <div className="col-3">
          <img src="/1984.jpg" className="img-responsive book-cover" />
        </div>
        <div className="col book-details">
          <p>
            <span className="book-details-label">AUTHOR: </span>
            {author}
          </p>
          <p>
            <span className="book-details-label">TITLE: </span>
            {name}
          </p>
          <p>
            <span className="book-details-label">GENRE: </span>
            {genre}
          </p>
          <p className="book-blurb">
            {blurb}
          </p>
        </div>
      </div>
    )
  }
}

class LibraryRow extends Component {
  render = () => {
    return (
      <div className="row library-row">
        {this.props.books.map((b, i) => {
          if (this.props.first && i === 0) {
            return <NewBook key={i} />
          } else {
            return <Book onClick={this.props.onBookClick} key={i} book={b} />
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
