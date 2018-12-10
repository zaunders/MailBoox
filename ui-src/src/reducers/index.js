import * as A from '../actions'

const initialState = {
  myAddress: '',
  books: [],
  selectedBook: null
}

export default function distrolibApp (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.GET_BOOK_DIRECTORY_SUCCESS:
      return {
        ...state,
        books: payload
      }
    case A.GET_MY_ADDRESS_SUCCESS:
      return {
        ...state,
        myAddress: payload
      }
    case A.SELECT_BOOK:
      return {
        ...state,
        selectedBook: payload === state.selectedBook ? null : payload
      }
    default:
      return state
  }
}
