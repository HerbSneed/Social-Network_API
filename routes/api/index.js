const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/thoughts', thoughtRoutes, reactionRoutes);
router.use('/users', userRoutes);

module.exports = router;