const {Thoughts, User} = require('../models');

module.exports = {
 async getThoughts(req, res) {
  try {
   const thoughts = await Thoughts.find();
   res.json(thoughts);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 async getSingleThought(req, res) {
  try {
   const thought = await Thoughts.findOnce({_id: req.params.thoughtId})
   .select('-__v');

   if (!thought) {
    return res.status(404).json({message: 'No thought with that Id'});
   }

  res.json(thought);
  }catch (err) {
   res.status(500).json(err);
  }
 },
 async createThought(req, res) {
  try {
   const dbThought = await Thoughts.create(req.body);
   res.json(dbThought);
  }catch (err) {
   res.status(500).json(err);
  }
 },
 async updateThought(req, res) {
  try {
   const thought = await Thoughts.findOneAndUpdate(
    {_id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true}
   );
   if (!video) {
    return res.status(404).json({message: 'No thought with this id!'});
   }

   res.json(thought);
  }catch (err) {
   console.log(err);
   res.status(500).json(err);
  }
 },
 async deleteThought(req, res) {
  try {
   const thought = await Thoughts.findOneAndRemove(
    {
     _id: req.params.thoughtId
    });
   
    if(!thought) {
     return res.status(404).json({ message: 'No thoght with this id!'})
    }

    const user = await User.findOneAndUpdate(
     {thought: req.params.thoughtId},
     {$pull: {thought: req.params.thoughtId}},
     {new: true}
    );

    if (!user) {
     return res.status(404).json({message: 'Thought created but no users with this id!'})
    }
    res.json({ message: 'Thought successfully deleted!'})
  } catch (err) {
   res.status(500).json(err);
  }
 },
};