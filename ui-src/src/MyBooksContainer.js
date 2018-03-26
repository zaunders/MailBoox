import { connect } from 'react-redux'
import Library from './components/Library'
import {
  getBookDirectory,
  selectBook
} from './actions'

const mapStateToProps = state => {
  return {
    books: state.books.filter(b => b.user === state.myHash),
    selectedBook: state.selectedBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksFunction: () => {
      dispatch(getBookDirectory())
    },
    selectBook: (hash) => {
      dispatch(selectBook(hash))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)
