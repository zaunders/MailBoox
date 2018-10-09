# MailBoox
This is a distributed Library application built on Holochain infrastructure

The basic idea is that you enter books that you have in your bookshelf, then people around you can ask to borrow books from you. If you agree to this you take the book and put it in your mailbox where they can pick-it up. Once they return the book you mark it returned in the app.

Once we really get going, this app should have a OCR scanning tool connected so that you could only scan your bookshelf with a phone, names of books are picked out, ISBN numbers and meta-information about the book are retrieved from open repositories and the books are available in your liberary. 


to develop this... 

`hcdev --no-nat-upnp --mdns web`

and at the same time, run in another terminal (have nodejs and npm installed)

```
cd ui-src
npm install # only the first time
npm start
```

