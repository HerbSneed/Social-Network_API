const { Thoughts, Reaction } = require("../models");

module.exports = {
 async addThoughtReaction(req, res) {
  try {
   const thought = await Thoughts.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
   );

   if (!thought) {
    return res.status(404).json({ message: 'No thought with this id!' });
   }

   res.json(thought);
  } catch (err) {
   res.status(500).json(err);
  }
 },
 // Remove thought reaction
 async removeThoughtReaction(req, res) {
  try {
   const thought = await Thoughts.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { runValidators: true, new: true }
   )

   if (!thought) {
    return res.status(404).json({ message: 'No thought with this id!' });
   }

   res.json(thought);
  } catch (err) {
   res.status(500).json(err);
  }
 },
}