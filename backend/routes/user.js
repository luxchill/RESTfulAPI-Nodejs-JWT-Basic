const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();
// get all user
router.get("/",middlewareController.verifyToken, userController.getAllUsers)

// delete user
router.delete('/:id',middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)

module.exports = router;