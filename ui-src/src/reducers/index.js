import * as A from '../actions'

const initialState = {
  myHash: '',
  books: []
}

export default function distrolibApp (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.GET_BOOK_DIRECTORY:
      return {
        ...state,
        books: payload
      }
    case A.GET_MY_HASH:
      return {
        ...state,
        myHash: payload
      }
    default:
      return state
  }
}
