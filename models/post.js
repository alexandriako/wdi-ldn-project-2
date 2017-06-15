const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const postSchema = new mongoose.Schema({
  image: { type: String},
  city: { type: String },
  name: { type: String },
  caption: { type: String},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  comments: [ commentSchema ]
}, {
  timestamps: true
});

postSchema
.virtual('imageSRC')
.get(function getImageSRC() {
  if(!this.image) return null;
  if(this.image.match(/^http/)) return this.image;
  return `https://s3-eu-west-1.amazonaws.com/wdi-london-test/${this.image}`;
});

postSchema.methods.belongsTo = function postBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Post', postSchema);
