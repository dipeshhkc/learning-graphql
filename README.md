## This project demonstrates the use of graphql with the express app.

### Getting Started

```
yarn install
yarn dev

```

#### Note: You can visit `/graphql` endpoint for documentation and quering different entities.

#### Examples

```
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
query{
  book(id:1) {
    id
    name
  }
}
```

```
query{
  author(id:1) {
    id
    name
  }
}
```