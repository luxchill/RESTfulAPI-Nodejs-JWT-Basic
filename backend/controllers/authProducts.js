const Products = require('../models/Products')

const authProducts = {
    addProducts: async (req, res) => {
    try {
      const newProducts = await new Products({
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        size: req.body.size,
        category: req.body.category,
        price: req.body.price,
        shortDesc: req.body.shortDesc,
        description: req.body.description,
        reviews: req.body.reviews,
        avgRating: req.body.avgRating
      });

      const products = await newProducts.save()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = authProducts