import { connect } from 'react-redux'
import Library from './components/Library'
import {
  getBookDirectory
} from './actions'

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBooksFunction: () => {
      dispatch(getBookDirectory())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)
