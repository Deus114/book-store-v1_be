const User = require("../models/user")

const createUser = async (data) => {
    try {
        let res = await User.create({
            email: data.email,
            password: data.password,
            username: data.username,
            address: data.address,
            phone: data.phone,
            role: data.role,
            image: data.image
        })
        let result = {
            DT: res,
            EC: 0,
            EM: "Create user success"
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
}

const getallUser = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        let user = await User.find()
        let totalPage = user.length / limit;
        let res = await User.find().skip(offset).limit(limit).exec();
        let result = {
            DT: {
                totalPages: Math.ceil(totalPage),
                users: res
            },
            EC: 0,
            EM: "GetAll list user succeed"
        };
        return result;
    } catch (error) {
        let result = {
            DT: null,
            EC: -1,
            EM: "GetAll list user failed"
        };
        return result;
    }
}

const updateUser = async (data) => {
    try {
        if (data.image === "") {
            let res = await User.findByIdAndUpdate(data.id,
                {
                    username: data.username,
                    phone: data.phone,
                    address: data.address,
                    role: data.role
                }, { new: true });
            let result = {
                DT: res,
                EC: 0,
                EM: "Update user succeed"
            };
            return result;
        }
        else {
            let res = await User.updateOne({ _id: data.id },
                {
                    username: data.username,
                    phone: data.phone,
                    address: data.address,
                    role: data.role,
                    image: data.image
                });
            let result = {
                DT: res,
                EC: 0,
                EM: "Update user succeed"
            };
            return result;
        }

    } catch (error) {
        let result = {
            DT: null,
            EC: -1,
            EM: "Update user failed"
        };
        return result;
    }
}

const delUser = async (id) => {
    try {
        let res = await User.deleteOne({ _id: id });
        let result = {
            DT: res,
            EC: 0,
            EM: "Delete user succeed"
        };
        return result;
    } catch (error) {
        let result = {
            DT: null,
            EC: -1,
            EM: "Delete user failed"
        };
        return result;
    }
}

module.exports = {
    createUser,
    getallUser,
    updateUser,
    delUser,
}