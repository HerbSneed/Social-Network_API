const { Thoughts, User, Reaction } = require('../models');

module.exports = {
  // GET THOUGHTS
  async getThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET SINGLE THOUGHT
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.thoughtId })
        .select('-__v');
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // CREATE THOUGHT
  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id} },
        { new: true }  
    ); 
    if (!user) {
      return res
        .status(404)
        .json({ message: 'Thought created, but found no user with that ID'});
    }
    res.json({ message: 'Created the thought'});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // UPDATE THOUGHT
  async updateThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thoughtText: req.body.thoughtText } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // DELETE THOUGHT
  async deleteThought(req, res) {
    try {
      const deleteThought = await Thoughts.findOneAndDelete(
        {
          _id: req.params.thoughtId
        });
      if (!deleteThought) {
        return res.status(404).json({ message: 'No thought with this id!' })
      }
      res.json({ message: 'Thought successfully deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
};