import * as A from '../actions'

const initialState = {
  books: []
}

export default function distrolibApp (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.GET_BOOKS:
      if (payload) {
        return {
          ...state,
          books: payload
        }
      } else {
        return state
      }
    case A.BOOK_CREATE:
      return {
        ...state,
        books: state.books.concat([meta.data])
      }
    default:
      return state
  }
}
