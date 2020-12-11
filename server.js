const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { schema } = require('./schema');
const app = express();


app.use('/graphql', graphqlHTTP({ graphiql: true, schema: schema }));

app.listen(9001, () => console.log('Server Running Successfully 🎉 🎉'));
