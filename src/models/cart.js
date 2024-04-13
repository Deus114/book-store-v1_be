const mongoose = require("mongoose");

//Shape data
const cartSchema = new mongoose.Schema(
    {
        productName: String,
        image: String,
        userId: String,
        quantity: String,
        price: String,
    },
    { timestamps: true }
)
const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;