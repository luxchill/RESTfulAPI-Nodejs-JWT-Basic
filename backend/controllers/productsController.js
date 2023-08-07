const Products = require('../models/Products')

const productsController = {
    getAllProducts: async(req, res) => {
        try {
            const product = await Products.find()
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteProducts: async(req, res) => {
        try {
            const product = await Products.findByIdAndDelete(req.params.id)
            return res.status(200).json('Xóa products thành công')
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = productsController