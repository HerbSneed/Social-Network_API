const router = require('express').Router();
const {
 addThoughtReaction,
 removeThoughtReaction,
} = require('../../controllers/ReactionController');

// LOCALHOST:3001/API/THOUGHTS/:THOUGHTID/REACTIONS
router
 .route('/:thoughtId/reactions')
 .post(addThoughtReaction);
 
// LOCALHOST:3001/API/THOUGHTS/:THOUGHTID/REACTIONS/:REACTIONID
router
 .route('/:thoughtId/reactions/:reactionId')
 .delete(removeThoughtReaction);


module.exports = router;