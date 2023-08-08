const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const reactionRoutes = require('./reaction-routes');

// LOCALHOST:3001/API/THOUGHTS
router.use('/thoughts', thoughtRoutes, reactionRoutes);

// LOCALHOST:3001/API/USERS
router.use('/users', userRoutes);

module.exports = router;