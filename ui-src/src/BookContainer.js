import { connect } from 'react-redux'
import Book from './Book'
import {
  markBookReturned,
  borrowBookRequest
} from './actions'

const mapStateToProps = state => {
  return {
    book: {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    returnBook: (ownerLink) => {
      dispatch(markBookReturned(ownerLink))
    },
    borrowBook: (ownerLink) => {
      dispatch(borrowBookRequest(ownerLink))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
