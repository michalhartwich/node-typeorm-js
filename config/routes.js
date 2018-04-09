const express = require('express');
const helloRoutes = require('@app/hello').routes;
const postsRoutes = require('@app/posts').routes;

const routes = express.Router();
const apiRoutes = express.Router();

apiRoutes.use('/hello', helloRoutes)
apiRoutes.use('/posts', postsRoutes)

routes.use('/api/v1', apiRoutes);

module.exports = routes;
