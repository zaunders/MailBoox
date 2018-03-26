import { connect } from 'react-redux'
import Library from './components/Library'
import {
  getBookDirectory
} from './actions'

const mapStateToProps = state => {
  console.log(state)
  return {
    books: state.books.filter(b => b.user === state.myHash)
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
