import React, { Component } from 'react'

class NewBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      author: '',
      genre: '',
      blurb: ''
    }
  }
  submit = (e) => {
    console.log(this.props)
    e.preventDefault()
    /*
    {
        "name": "Moby Dick",
        "author": "Herman Melville",
        "genre": "thriller",
        "blurb": "This is a book about a guy that is on a boat."
    }
    */
    this.props.bookCreate({
      name: this.state.name,
      author: this.state.author,
      genre: this.state.genre,
      blurb: this.state.blurb
    })
    this.props.history.push('/')
  }
  setStateForKey = key => {
    return (e) => {
      this.setState({
        [key]: e.target.value
      })
    }
  }
  render = () => {
    return (
      <div className="row">
        <div className="col-4">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" className="form-control" type="text" value={this.state.name} onChange={this.setStateForKey('name')} />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input name="author" className="form-control" type="text" value={this.state.author} onChange={this.setStateForKey('author')} />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input name="genre" className="form-control" type="text" value={this.state.genre} onChange={this.setStateForKey('genre')} />
            </div>
            <div className="form-group">
              <label htmlFor="blurb">Blurb</label>
              <input name="blurb" className="form-control" type="text" value={this.state.blurb} onChange={this.setStateForKey('blurb')} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewBook
