import { connect } from 'react-redux'
import Library from './Library'
import {
  getBooks
} from './actions'

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => {
      dispatch(getBooks())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)
