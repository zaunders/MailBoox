import { connect } from 'react-redux'
import NewBook from './NewBook'
import {
  createBook
} from './actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => {
      dispatch(createBook(book))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBook)
