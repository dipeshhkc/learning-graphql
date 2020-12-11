## This project demonstrates the use of graphql with the express app.

### Getting Started

```
yarn install
yarn dev

```

#### Note: You can visit `/graphql` endpoint for documentation and quering different entities.

#### Examples

```
//get all books with their authors
query{
  books{
    id
    name
    author {
      id
      name
    }
  }
}
```

```
//get all authors with their books
query{
  authors {
    id
    name
    books {
      id
      name
    }
    
  }
}
```

```
//get single book with id
query{
  book(id:1) {
    id
    name
  }
}
```

```
//get single author with id
query{
  author(id:1) {
    id
    name
  }
}
```

```
//adding book with return value
mutation{
  addBook(name:"book10",author:2) {
    id
    name
  } 
}
```

```
//adding author with return value

mutation{
  addAuthor(name:"Author10") {
    id
    name
  } 
}
```