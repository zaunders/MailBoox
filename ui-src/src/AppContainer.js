import { connect } from 'react-redux'
import App from './App'
import {
  getMyAddress
} from './actions'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyAddress: () => {
      dispatch(getMyAddress())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
