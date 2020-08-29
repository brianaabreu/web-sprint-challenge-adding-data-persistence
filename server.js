const express = require('express');

const proRoute = require('./routers/projects');
const taskRoute = require('./routers/resources');
const resRoute = require('./routers/tasks');


const server = express();

server.use(express.json());
server.use('/api/projects/', proRoute);
server.use('/api/tasks/', resRoute);
server.use('/api/resources/', taskRoute);

module.exports = server;