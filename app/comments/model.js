const postSchema = require('@app/posts/model').Schema;

class Comment {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }
}

module.exports.Comment = Comment;
module.exports.Schema = {
  target: Comment,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    content: {
      type: 'text'
    }
  },
  relations: {
    post: {
      target: "Post",
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'comments'
    }
  }
}
