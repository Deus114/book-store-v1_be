const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/user")

module.exports = {
    getBoard: async () => {
        try {
            let users = (await User.find()).length;
            let categories = (await Category.find()).length;
            let products = (await Product.find()).length;

            let result = {
                DT: {
                    users: users,
                    categories: categories,
                    products: products
                },
                EC: 0,
                EM: "Get board success"
            };

            return result;

        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Get board failed"
            };

            return result;
        }
    }
}