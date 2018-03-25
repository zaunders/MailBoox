import * as A from '../actions'

const initialState = {
  books: {
    qwen1: {
      title: "Hey",
      author: "Person",
      genre: "scifi"
    }
  }
}

export default function distrolibApp (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.GET_BOOKS:
      return {
        ...state,
        books: {}
      }
    default:
      return state
  }
}
