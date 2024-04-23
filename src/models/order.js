const mongoose = require("mongoose");

//Shape data
const orderSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            require: true
        },
        totalPrice: {
            type: Number,
            require: true
        },
        totalQuantity: {
            type: Number,
            require: true
        },
        userId: String,
        name: String,
        email: String,
        phone: String,
        address: String,
        status: String,
        payment: String,
    },
    { timestamps: true }
)
const Order = mongoose.model("order", orderSchema);

module.exports = Order;