'use strict';

function bookCreate(input) {
  var hash = commit('book', input)
  var ownerLinkHash = commit('ownerLink',
    {Links:[
           {Base: hash, Link: App.Agent.Hash, Tag: 'has owner'},
           {Base: App.Agent.Hash, Link: hash, Tag: 'has book'}
        ]}
      )
  return hash
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
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "sampleEntry":
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
