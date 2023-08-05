const router = require('express').Router();
const {
 addThoughtReaction,
 removeThoughtReaction,
} = require('../../controllers/ReactionController');

// /api/thoughts/:thought_id
router
 .route('/reactions/:thoughtId')
 .post(addThoughtReaction)
 .delete(removeThoughtReaction);


module.exports = router;