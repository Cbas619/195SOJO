const router = require("express").Router();
const verifyToken = require("../utils/verifyToken");
const {
  currentUser,
  selectUser,
  getAllUsers,
  editUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", currentUser);
router.get("/user/:id", selectUser);
router.get("/all", getAllUsers);
router.put("/change/:id", verifyToken, editUser);
router.delete("/delete/:id", verifyToken, deleteUser);

module.exports = router;
