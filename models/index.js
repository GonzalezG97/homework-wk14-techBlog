const Comment = require("./Comment.js");
const User = require("./User.js");
const Post = require("./Post.js");

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

module.exports = {Comment, User, Post};
