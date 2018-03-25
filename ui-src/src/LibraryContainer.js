import { connect } from 'react-redux'
import Library from './Library'
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
    getBookDirectory: () => {
      dispatch(getBookDirectory())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)
