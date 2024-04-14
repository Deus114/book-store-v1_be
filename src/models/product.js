const mongoose = require("mongoose");

//Shape data
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        category: String,
        desc: String,
        author: String,
        nxb: String,
        buy: String,
        watch: String,
        status: String,
        image: String,
    },
    { timestamps: true }
)
const Product = mongoose.model("product", productSchema);

module.exports = Product;