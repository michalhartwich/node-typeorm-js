const { Comment } = require('@app/comments');

class Post {
  constructor(id, title, description, comments) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.comments = comments;
  }
}

module.exports.Post = Post;
module.exports.Schema = {
  target: Post,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    title: {
      type: 'varchar'
    },
    description: {
      type: 'varchar'
    }
  },
  relations: {
    comments: {
      target: () => Comment,
      type: 'one-to-many',
      cascadeInsert: true,
      cascadeUpdate: true,
      cascadeRemove: true,
      inverseSide: 'post'
    }
  }
}
