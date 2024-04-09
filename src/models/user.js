const mongoose = require("mongoose");

//Shape data
const userSchema = new mongoose.Schema(
    {
        username: String,
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        address: String,
        phone: String,
        role: String,
        image: String,
    },
    { timestamps: true }
)
const User = mongoose.model("user", userSchema);

module.exports = User;