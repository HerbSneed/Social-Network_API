const router = require('express').Router();
const {
 getUsers,
 getSingleUser,
 createUser,
 deleteUser,
 updateUser,
 addFriend,
 deleteFriend,
} = require('../../controllers/UserController');

// LOCALHOST:3001/API/USERS
router
.route('/')
.get(getUsers)
.post(createUser);

// LOCALHOST:3001/API/USERS/:USERID
router
 .route('/:userId')
 .get(getSingleUser)
 .put(updateUser)
 .delete(deleteUser);

 // LOCALHOST:3001/API/USERS/:USERID/FRIENDS/:FRIENDID
 router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);


module.exports = router;