var express = require('express');
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var {typeDefs,resolvers} =  require('./GraphQL/campaigns');
app.use(cors())

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000`),
)
