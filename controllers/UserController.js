const {User, Thoughts} = require('../models');

module.exports = {
 // GET ALL USERS
 async getUsers(req, res) {
  try {
   const users = await User.find();
   res.json(users);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 // GET SINGLE USER
 async getSingleUser(req, res) {
  try {
   const user = await User.findOne(
    { _id: req.params.userId })
    .select('-__v');
   if (!user) {
    return res.status(404).json({ message: 'No user with that ID' });
   }
   res.json(user);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 // CREATE NEW USER
 async createUser(req, res) {
  try {
   const dbUser = await User.create(req.body);
   res.json(dbUser);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 // DELETE USER
 async deleteUser(req, res) {
  try {
   const user = await User.findOneAndDelete({
    _id: req.params.userId,
   });
   if (!user) {
    return res.status(404).json({ message: 'No user with that ID' });
   }
   await Thoughts.deleteMany({ _id: { $in: user.Thoughts } });
   res.json({ message: 'User and Thoughts are deleted!' });
  } catch (err) {
   res.status(500).json(err);
  }
 },

 // UPDATE A USER
 async updateUser(req, res) {
  try {
   const user = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
   );
   if (!user) {
    return res.status(404).json({ message: 'No user with this id!' });
   }
   res.json(user);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 // ADD A FRIEND
 async addFriend(req, res) {
  try {
   const user = await User.findOne(
    { _id: req.params.userId });
   const friendId = req.params.friendId;
   const updateUser = await User.findOneAndUpdate(
    {_id: req.params.userId},
    { $addToSet: { friends: friendId} },
    { new: true}
   );
   if (!updateUser) {
    return res
    .status(404)
    .json({ message: 'Friend not found'});
   }
   res.json( updateUser );
  } catch (err) {
   console.log(err);
   res.status(500).json(err);
  }
 },
 // DELETE A FRIEND
 async deleteFriend(req, res) {
  try {
   const user = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { runValidators: true, new: true }
   );
   if (!user) {
    return res.status(404).json({ message: 'No user with that ID' });
   }
   res.json(user);
  } catch (err) {
   res.status(500).json(err);
  }
 }
};