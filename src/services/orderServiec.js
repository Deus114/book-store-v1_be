const Order = require('../models/order');
const orderCode = require("../models/orderCode");

module.exports = {
    createOrder: async (data) => {
        try {
            let res = await Order.create({
                content: data.content,
                totalPrice: data.totalPrice,
                totalQuantity: data.totalQuantity,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                status: data.status,
                payment: data.payment,
                userId: data.userId
            })
            let result = {
                DT: res,
                EC: 0,
                EM: "Create Order success"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: error
            };
            return result;
        }
    },

    makeOrder: async () => {
        let currentCode = await orderCode.findOne().sort({ orderCode: -1 });
        if (currentCode) {
            try {
                let res = await orderCode.updateOne({ orderCode: currentCode.orderCode },
                    {
                        orderCode: currentCode.orderCode + 1,
                    });
                const order = {
                    amount: 10000,
                    description: 'Thanh toan mua sach',
                    orderCode: currentCode.orderCode + 1,
                    returnUrl: `https://bookstore-inky-omega.vercel.app/success`,
                    cancelUrl: `https://bookstore-inky-omega.vercel.app/cancel`,
                };

                return order;
            } catch (error) {
                // Do nothing
            }
        } else {
            return null;
        }
    },

    getorderById: async (id) => {
        try {
            let res = await Order.find({ userId: id }).sort({ createdAt: -1 });
            let result = {
                DT: res,
                EC: 0,
                EM: "Get user's order success"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Get user's order failed"
            };
            return result;
        }
    },

}