'use strict';

function bookCreate(input) {
  var hash = commit('book', input)
  var ownerLinkHash = commit('ownerLink',
    {Links:[
           {Base: hash, Link: App.Agent.Hash, Tag: 'has owner'},
           {Base: App.Agent.Hash, Link: hash, Tag: 'has book'}
        ]}
      )
  var addToDirectory = commit('ownerLink',
      {Links:[
            {Base: App.DNA.Hash, Link: hash, Tag: 'contains'},
            ]}
          )
  return ownerLinkHash
}

function getBookDirectory() {
  var directory = getLinks(App.DNA.Hash, 'contains', { Load: true })
  return directory
}


function createBorrowRequest(ownerLink){
    var links = commit('borrowRequest',
    {Links: [
            {Base: ownerLink, Link: App.Agent.Hash, Tag: 'has received request'},
            {Base: App.Agent.Hash, Link: ownerLink, Tag: 'has sent request'}
    ]})
    return links
}

function acceptBorrowRequest(ownerLinkHash) {
  var links = commit('borrowedBookLink',
  {Links: [
          {Base: ownerLinkHash, Link: App.Agent.Hash, Tag: 'has lent out book'},
          {Base: App.Agent.Hash, Link: ownerLinkHash, Tag: 'has borrowed book'}
  ]})
  var deletedRequest = commit('borrowRequest',
  {Links: [
          {Base: ownerLinkHash, Link: App.Agent.Hash, Tag: 'has received request', LinkAction: HC.LinkAction.Del},
          {Base: App.Agent.Hash, Link: ownerLinkHash, Tag: 'has sent request', LinkAction: HC.LinkAction.Del}
  ]})
  return links
}

function lookForRequests(){
    var list = getLinks(App.Agent.Hash, 'has received request')
    debug(list)
    return list
}

function createReturnRequest(ownerLink){
    var links = commit('returnRequest',
    {Links: [
            {Base: ownerLink, Link: App.Agent.Hash, Tag: 'has received return request'},
            {Base: App.Agent.Hash, Link: ownerLink, Tag: 'has sent return request'}
    ]})
    debug(links)
    return links
}

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

function getBooks(owner) {
  var links = getLinks(owner, 'has book', { Load: true });
  links = links.map(function (e) { return e.Entry; })
  return links
}


function collectionCreate(collection) {
  var hash = commit('collection', collection)
  return hash
}

function displayHash(book) {
  var hash = commit('book', book)
  debug(hash)
  var hash2 = makeHash('book', book)
  debug(hash2)
  return hash
}


function updateBookInfo(input){
  var oldhash = makeHash('book', input.oldBookInfo)
  var hash = update('book', input.newBookInfo, oldhash)
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
