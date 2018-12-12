import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './Schema/schema';
import cors from 'cors';
import mongoose from 'mongoose';
import config from '../config/config'
// import fb from './Authentication/Facebook/fb';
// import google from './Authentication/Google/google';

import path from 'path';
import express from 'express';
const app = express();
app.use(cors(config.CORS_OPTIONS));
const connectMongo = async () => await mongoose.connect(config.mongodb.URI, { useNewUrlParser: true })
                           .then(() => console.log('Mongo Connected...!'))
                           .catch(err => console.error(err));;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async() => ({
        mongo: await connectMongo(),
    }),
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/login', (req, res) => {
    res.send('Fuck Yeah!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => `Server start at port ${PORT}`);