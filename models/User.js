const { Schema, model } = require('mongoose');

const userSchema = new Schema({
 userName: {
  type: String,
  unique: true,
  required: true,
  trim: true
 },
 email: {
  type: String,
  required: true,
  unique: true,
  match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
 },
 thoughts: [
  {
   type: Schema.Types.ObjectId,
   ref: 'Thoughts',
  },
 ], 
 friends: [
  {
   type: Schema.Types.ObjectId,
   ref: 'User'
  }
 ]
}, 
{
 toJSON: {
  virtuals: true,
 },
 id: false,
});

userSchema.virtual('friendCount').get(function () {
 return this.friends.length;
});

const User = model('user', userSchema); 

module.exports = User;

