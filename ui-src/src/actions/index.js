

// frontend actions
export const SELECT_BOOK = 'selectBook'

export function selectBook(hash) {
  return {
    type: SELECT_BOOK,
    payload: hash
  }
}

// Holochain actions
const _SUCCESS = '_SUCCESS'
const _FAILURE = '_FAILURE'
export const CREATE_BOOK = 'createBook'
export const CREATE_BOOK_SUCCESS = CREATE_BOOK + _SUCCESS
export const CREATE_BOOK_FAILURE = CREATE_BOOK + _FAILURE
export const GET_MY_ADDRESS = 'getMyAddress'
export const GET_MY_ADDRESS_SUCCESS = GET_MY_ADDRESS + _SUCCESS
export const GET_MY_ADDRESS_FAILURE = GET_MY_ADDRESS + _FAILURE
export const GET_BOOKS = 'getBooks'
export const GET_BOOKS_SUCCESS = GET_BOOKS + _SUCCESS
export const GET_BOOKS_FAILURE = GET_BOOKS + _FAILURE
export const GET_BOOK_DIRECTORY = 'getBookDirectory'
export const GET_BOOK_DIRECTORY_SUCCESS = GET_BOOK_DIRECTORY + _SUCCESS
export const GET_BOOK_DIRECTORY_FAILURE = GET_BOOK_DIRECTORY + _FAILURE
export const GET_BOOK = 'getBook'
export const GET_BOOK_SUCCESS = GET_BOOK + _SUCCESS
export const GET_BOOK_FAILURE = GET_BOOK + _FAILURE
export const BORROW_BOOK_REQUEST = 'borrowBookRequest'
export const BORROW_BOOK_REQUEST_SUCCESS = BORROW_BOOK_REQUEST + _SUCCESS
export const BORROW_BOOK_REQUEST_FAILURE = BORROW_BOOK_REQUEST + _FAILURE
export const ACCEPT_BORROW_REQUEST = 'acceptBorrowRequest'
export const ACCEPT_BORROW_REQUEST_SUCCESS = ACCEPT_BORROW_REQUEST + _SUCCESS
export const ACCEPT_BORROW_REQUEST_FAILURE = ACCEPT_BORROW_REQUEST + _FAILURE
export const MARK_BOOK_RETURNED = 'markBookReturned'
export const MARK_BOOK_RETURNED_SUCCESS = MARK_BOOK_RETURNED + _SUCCESS
export const MARK_BOOK_RETURNED_FAILURE = MARK_BOOK_RETURNED + _FAILURE

export function createBook (book) {
  return {
    type: CREATE_BOOK,
    payload: book,
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/create_book'
    }
  }
}

export function getMyAddress () {
  return {
    type: GET_MY_ADDRESS,
    payload: {},
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/get_my_address'
    }
  }
}

export function getBooks (owner) {
  return {
    type: GET_BOOKS,
    payload: owner,
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/get_books'
    }
  }
}

export function getBookDirectory () {
  return {
    type: GET_BOOK_DIRECTORY,
    payload: {},
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/get_books'
    }
  }
}

export function getBook (ownerLink) {
  return {
    type: GET_BOOK,
    payload: ownerLink,
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/get_book'
    }
  }
}

export function borrowBookRequest (ownerLink) {
  return {
    type: GET_BOOK,
    payload: ownerLink,
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/request_to_borrow'
    }
  }
}

export function markBookReturned (ownerLink) {
  return {
    type: MARK_BOOK_RETURNED,
    payload: ownerLink,
    meta: {
      holochainAction: true,
      callString: 'test-instance/books/main/mark_book_returned'
    }
  }
}
