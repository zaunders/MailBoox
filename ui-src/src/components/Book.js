import React, { Component } from 'react'

export default class Book extends Component {
  render = () => {
    const { name, author, genre, blurb, borrowed, hash } = this.props.book
    // <img width={430/3} height={645/3} src={this.props.book} />
    return (
      <div className="col-3 book-image" onClick={() => this.props.onClick(hash)}>
        <div className="inner-book-image">
          <p className="book-name">{name}</p>
          <p className="book-author">{author}</p>
          <p className="book-genre">{genre}</p>
          {borrowed && <p>borrowed</p>}
        </div>
      </div>
    )
  }
}
