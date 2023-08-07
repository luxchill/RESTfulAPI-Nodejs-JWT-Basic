const productsController = require('../controllers/productsController')
const middlewareController = require("../controllers/middlewareController");
const authProducts = require('../controllers/authProducts')
const router = require("express").Router()

// get all products
router.get('/',/* middlewareController.verifyToken,*/ productsController.getAllProducts)

// delete products
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, productsController.deleteProducts)

// add products
router.post('/add', authProducts.addProducts)

module.exports = router;


