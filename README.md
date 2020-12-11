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
}```