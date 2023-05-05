const router = require("express").Router();
const verifyToken = require("../utils/verifyToken")
const { currentUser, selectUser, editUser, deleteUser } = require("../controllers/userController")

router.get('/', currentUser);
router.get('/user/:id', selectUser);
router.put('/change/:id', verifyToken, editUser);
router.delete('/delete/:id', verifyToken, deleteUser);

module.exports = router;