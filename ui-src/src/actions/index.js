

// frontend actions
export const SELECT_BOOK = 'selectBook'

export function selectBook(hash) {
  return {
    type: SELECT_BOOK,
    payload: hash
  }
}

// Holochain actions
export const BOOK_CREATE = 'bookCreate'
export const GET_MY_HASH = 'getMyHash'
export const GET_BOOKS = 'getBooks'
export const GET_BOOK_DIRECTORY = 'getBookDirectory'
export const GET_BOOK = 'getBook'
export const BORROW_BOOK_REQUEST = 'borrowBookRequest'
export const ACCEPT_BORROW_REQUEST = 'acceptBorrowRequest'
export const MARK_BOOK_RETURNED = 'markBookReturned'

export function bookCreate (book) {
  return {
    type: BOOK_CREATE,
    meta: {
      isHc: true,
      namespace: 'books',
      data: book
    }
  }
}

export function getMyHash () {
  return {
    type: GET_MY_HASH,
    meta: {
      isHc: true,
      namespace: 'books'
    }
  }
}

export function getBooks (owner) {
  return {
    type: GET_BOOKS,
    meta: {
      isHc: true,
      namespace: 'books',
      data: owner
    }
  }
}

export function getBookDirectory () {
  return {
    type: GET_BOOK_DIRECTORY,
    meta: {
      isHc: true,
      namespace: 'books'
    }
  }
}

export function getBook (ownerLink) {
  return {
    type: GET_BOOK,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}

export function borrowBookRequest (ownerLink) {
  return {
    type: GET_BOOK,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}

export function markBookReturned (ownerLink) {
  return {
    type: MARK_BOOK_RETURNED,
    meta: {
      isHc: true,
      namespace: 'books',
      data: ownerLink
    }
  }
}
