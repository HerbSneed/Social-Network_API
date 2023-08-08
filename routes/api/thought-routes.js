const router = require('express').Router();
const {
 getThoughts,
 getSingleThought,
 createThought,
 updateThought,
 deleteThought,
} = require('../../controllers/ThoughtsController');

// LOCALHOST:3001/API/THOUGHTS
router.route('/')
.get(getThoughts)
.post(createThought);

// LOCALHOST:3001/API/THOUGHTS/:THOUGHTID
router
 .route('/:thoughtId')
 .get(getSingleThought)
 .put(updateThought)
 .delete(deleteThought);

module.exports = router;