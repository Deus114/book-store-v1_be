const mongoose = require("mongoose");

//Shape data
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        status: String
    },
    { timestamps: true }
)
const Category = mongoose.model("category", categorySchema);

module.exports = Category;