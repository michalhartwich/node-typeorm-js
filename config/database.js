const { createConnection } = require('typeorm');

const postSchema = require('@app/posts').Schema;
const commentSchema = require('@app/comments').Schema;

const entitySchemas = [
  postSchema,
  commentSchema,
];

module.exports = () => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "michal",
    password: "",
    database: "node-domain-boilerplate",
    synchronize: true,
    entitySchemas: entitySchemas
  });
}
