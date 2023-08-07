const User = require("../models/User");

const userController = {
    //lấy tất cả user
    getAllUsers: async(req, res) => {
        try {
            const user = await User.find()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //xóa user
    deleteUser: async(req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
           return res.status(200).json('Xóa user thành công')
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = userController;