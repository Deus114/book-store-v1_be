const { createOrder, getorderById } = require("../services/orderServiec");

module.exports = {
    postOrder: async (req, res) => {
        let { content, totalQuantity, totalPrice, name, email, phone, address, status, payment, userId } = req.body;
        let data = {
            content, totalQuantity, totalPrice, name, email, phone, address, status, payment, userId
        }
        let result = await createOrder(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    orderByID: async (req, res) => {
        let id = req.query.id;
        let result = await getorderById(id)
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },
};