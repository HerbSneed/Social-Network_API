const router = require('express').Router();
const {
 getUsers,
 getSingleUser,
 createUser,
 deleteUser,
 updateUser,
} = require('../../controllers/UserController');

// /api/user
router.route('/')
.get(getUsers)
.post(createUser);

// /api/user/:user_id
router
 .route('/:userId')
 .get(getSingleUser)
 .put(updateUser)
 .delete(deleteUser);


module.exports = router;