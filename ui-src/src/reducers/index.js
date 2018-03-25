import * as A from '../actions'

const initialState = {
  books: []
}

export default function distrolibApp (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.GET_BOOK_DIRECTORY:
      if (payload) {
        return {
          ...state,
          books: payload
        }
      } else {
        return state
      }
    default:
      return state
  }
}
