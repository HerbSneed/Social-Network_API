const router = require('express').Router();
const {
 getThoughts,
 getSingleThought,
 createThought,
 updateThought,
 deleteThought,
} = require('../../controllers/ThoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thought_id
router
 .route('/:thoughtId')
 .get(getSingleThought)
 .put(updateThought)
 .delete(deleteThought);


module.exports = router;