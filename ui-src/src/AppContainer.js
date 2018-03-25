import { connect } from 'react-redux'
import App from './App'
import {
  getBooks
} from './actions'

const mapStateToProps = state => {
  return {
    ...state
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
)(App)
