'use strict';

/*
TODO: There is a thing happening where stuff breaks if you update the
book entry, then do stuff with links to the original book hash
*/

function bookCreate(input) {
  input.user = App.Agent.Hash
  var hash = commit('book', input)
  var ownerLinkHash = commit('ownerLink',
    {Links:[
           {Base: hash, Link: App.Agent.Hash, Tag: 'has owner'},
           {Base: App.Agent.Hash, Link: hash, Tag: 'has book'}
        ]}
      )
  // directory stores copies of books
  var addToDirectory = commit('directoryLink',
      {Links:[
            {Base: App.DNA.Hash, Link: hash, Tag: 'contains'},
            ]}
          )
  return hash
}

function getBookDirectory() {
  var directory = getLinks(App.DNA.Hash, 'contains', {Load: true})
  directory = directory.map(function (book) {
    var loans = getLinks(book.Hash, "is borrowed by")
    book.Entry.borrowed = loans.length > 0
    book.Entry.hash = book.Hash
    return book.Entry
  })
  return directory
}


function createBorrowRequest(bookHash){
    var links = commit('borrowRequest',
    {Links: [
            {Base: bookHash, Link: App.Agent.Hash, Tag: 'has received request'},
            {Base: App.Agent.Hash, Link: bookHash, Tag: 'has sent request'}
    ]})
    return links
}

function acceptBorrowRequest(bookHash) {
  var links = commit('borrowedBookLink',
  {Links: [
          {Base: bookHash, Link: App.Agent.Hash, Tag: 'is borrowed by'},
          {Base: App.Agent.Hash, Link: bookHash, Tag: 'has borrowed book'}
  ]})
  var deletedRequest = commit('borrowRequest',
  {Links: [
          {Base: bookHash, Link: App.Agent.Hash, Tag: 'has received request', LinkAction: HC.LinkAction.Del},
          {Base: App.Agent.Hash, Link: bookHash, Tag: 'has sent request', LinkAction: HC.LinkAction.Del}
  ]})
  return links
}

function lookForRequests(){
    var books = getLinks(App.Agent.Hash, 'has book')
    var requests = []
    books.forEach(function(book) {
      var forBookRequests = getLinks(book.Hash, 'has received request')
      if (forBookRequests.length > 0){
        var entry = get(book.Hash)
        forBookRequests.forEach(function(r) {
          requests.push({
            book: entry,
            requestedBy: r.Hash
          })
        })
      }
    })
    return requests
}

/* Probably isn't needed, the owner could always be allowed to terminate a loan

function createReturnRequest(ownerLink){
    var links = commit('returnRequest',
    {Links: [
            {Base: ownerLink, Link: App.Agent.Hash, Tag: 'has received return request'},
            {Base: App.Agent.Hash, Link: ownerLink, Tag: 'has sent return request'}
    ]})
    debug(links)
    return links
}

//old version of cancelling loans
function acceptReturnRequest(ownerLinkHash) {
  var deleteBorrowedBookLink = commit('borrowedBookLink',
  {Links: [
          {Base: ownerLinkHash, Link: App.Agent.Hash, Tag: 'has lent out book', LinkAction: HC.LinkAction.Del},
          {Base: App.Agent.Hash, Link: ownerLinkHash, Tag: 'has borrowed book', LinkAction: HC.LinkAction.Del}
  ]})
  var deletedRequest = commit('returnRequest',
  {Links: [
          {Base: ownerLinkHash, Link: App.Agent.Hash, Tag: 'has received return request', LinkAction: HC.LinkAction.Del},
          {Base: App.Agent.Hash, Link: ownerLinkHash, Tag: 'has sent return request', LinkAction: HC.LinkAction.Del}
  ]})
  return deleteBorrowedBookLink
}
*/
function markBookReturned(bookHash) {
  var deleteBorrowedBookLink = commit('borrowedBookLink',
  {Links: [
          {Base: bookHash, Link: App.Agent.Hash, Tag: 'is borrowed by', LinkAction: HC.LinkAction.Del},
          {Base: App.Agent.Hash, Link: bookHash, Tag: 'has borrowed book', LinkAction: HC.LinkAction.Del}
  ]})

  return deleteBorrowedBookLink
}

function getBooks(owner) {
  owner = owner === undefined ? App.Agent.Hash : owner;
  var links = getLinks(owner, 'has book', { Load: true });
  links = links.map(function (e) {
    var loans = getLinks(e.Hash, 'is borrowed by')
    e.Entry.borrowed = loans.length > 0
    e.Entry.hash = e.Hash
    return e.Entry
  })
  return links
}


function collectionCreate(collection) {
  var hash = commit('collection', collection)
  return hash
}

function addBookToCollection(input) {
  var addedBook = commit('bookInColletion',
  {Links: [
          {Base: input.bookHash, Link: input.collectionHash, Tag: 'is in collection'},
          {Base: input.collectionHash, Link: input.bookHash, Tag: 'has book'}
  ]})
  return addedBook
}


function updateBookInfo(input){
  input.newBookInfo.user = App.Agent.Hash
  var hash = update('book', input.newBookInfo, input.oldBookHash)
  return hash
}

function genesis() {
  return true;
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "book":
      return true;
    case "collection":
      return true;
    case "ownerLink":
      return true;
    case "borrowRequest":
      return true;
    case "borrowedBookLink":
      return true;
    case "returnRequest":
      return true;
    case "directoryLink":
      return true;
    case "bookInColletion":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "book":
      return true;
    case "collection":
      return true;
    case "ownerLink":
      return true;
    case "borrowRequest":
      return true;
    case "borrowedBookLink":
      return true;
    case "returnRequest":
      return true;
    case "directoryLink":
      return true;
    case "bookInColletion":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "book":
      return true;
    case "collection":
      return true;
    case "borrowRequest":
      return true;
    case "borrowedBookLink":
      return true;
    case "returnRequest":
      return true;
    case "directoryLink":
      return true;
    case "bookInColletion":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "book":
      return true;
    case "collection":
      return true;
    case "borrowRequest":
      return true;
    case "borrowedBookLink":
      return true;
    case "returnRequest":
      return true;
    case "directoryLink":
      return true;
    case "bookInColletion":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateLink(linkEntryType,baseHash,links,pkg,sources) {
  switch (linkEntryType) {
    case "ownerLink":
      return true;
    case "borrowRequest":
      return true;
    case "borrowedBookLink":
      return true;
    case "returnRequest":
      return true;
    case "directoryLink":
      return true;
    case "bookInColletion":
      return true;
    default:
      return false;
  }
}

function validatePutPkg (entryName) {
  return null;
}

function validateModPkg (entryName) {
  return null;
}

function validateDelPkg (entryName) {
  return null;
}

function validateLinkPkg (entryName) {
  return null;
}
