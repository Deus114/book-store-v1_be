const { addCart, getallCart } = require("../services/cartService");


module.exports = {
    postAddCart: async (req, res) => {
        let { productName, image, userId, quantity, price } = req.body;
        let data = {
            productName, image, userId, quantity, price
        }
        let result = await addCart(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getCart: async (req, res) => {
        let id = req.query.id;
        let result = await getallCart(id)
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },
}