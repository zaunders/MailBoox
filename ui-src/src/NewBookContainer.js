import { connect } from 'react-redux'
import NewBook from './NewBook'
import {
  bookCreate
} from './actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookCreate: (book) => {
      dispatch(bookCreate(book))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBook)
