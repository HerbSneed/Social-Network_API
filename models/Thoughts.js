const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtsSchema = new Schema({
 thoughtText: {
  type: String,
  required: true,
  min_length: 1,
  max_length: 280
 },
 createdAt: {
  type: Date,
  default: Date.now,
  get: function (createdAt) {
   return new Date(createdAt).toLocaleString();
  },
 },
 userName: {
  type: String,
  required: true
 },
 reactions: [Reaction],
},
 {
  toJSON: {
   virtuals: true,
  },
  id: false,
 });

thoughtsSchema.virtual('reactionCount').get(function () {
 return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;