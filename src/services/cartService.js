const Cart = require("../models/cart");

module.exports = {
    // add increase decrease
    addCart: async (data) => {
        try {
            let num = data.quantity;
            let res = await Cart.findOne({
                productName: data.productName,
                userId: data.userId,
            }).exec();
            if (!res) {
                let newcart = await Cart.create({
                    productName: data.productName,
                    image: data.image,
                    userId: data.userId,
                    quantity: data.quantity,
                    price: data.price,
                })
                let result = {
                    DT: newcart,
                    EC: 0,
                    EM: "Add to cart success"
                };
                return result;
            }
            else {
                if (num === "1") {
                    let cart = await Cart.updateOne({ _id: res._id },
                        {
                            quantity: +res.quantity + 1
                        });
                    let result = {
                        DT: cart,
                        EC: 0,
                        EM: "Add to cart success"
                    };
                    return result;
                }
                else {
                    if (res.quantity === "1") {
                        let cart = await Cart.deleteOne({ _id: res._id });
                        let result = {
                            DT: cart,
                            EC: 0,
                            EM: "Delete product success"
                        };
                        return result;
                    }
                    else {
                        let cart = await Cart.updateOne({ _id: res._id },
                            {
                                quantity: +res.quantity - 1
                            });
                        let result = {
                            DT: cart,
                            EC: 0,
                            EM: "Modified cart success"
                        };
                        return result;
                    }
                }
            }
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: error
            };
            return result;
        }
    },

    getallCart: async (id) => {
        try {
            let res = await Cart.find({ userId: id }).sort({ createdAt: -1 });
            let result = {
                DT: res,
                EC: 0,
                EM: "Get user cart success"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Get user cart failed"
            };
            return result;
        }
    },

    deleteCart: async (id) => {
        try {
            let cart = await Cart.deleteOne({ _id: id });
            let result = {
                DT: cart,
                EC: 0,
                EM: "Delete product success"
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
}