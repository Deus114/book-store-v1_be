const User = require("../models/user");

const register = async (data) => {
    try {
        let check = await User.findOne({ email: data.email });
        if (check) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Email already exist !"
            };
            return result;
        }
        else {
            let res = await User.create({
                email: data.email,
                password: data.password,
                username: data.username,
                address: data.address,
                phone: data.phone,
                role: data.role,
            })
            let result = {
                DT: res,
                EC: 0,
                EM: "Create user success"
            };
            return result;
        }
    } catch (error) {
        let result = {
            DT: null,
            EC: -1,
            EM: error
        };
        return result;
    }
}

const login = async (data) => {
    try {
        let checkLogin = false;
        // Tìm người dùng theo email
        const user = await User.findOne({ email: data.email });

        if (!user) {
            // Email không tồn tại trong cơ sở dữ liệu
            checkLogin = false;
        }
        // Kiểm tra mật khẩu
        else if (user.password === data.password) {
            // Mật khẩu khớp
            checkLogin = true;
        } else {
            // Mật khẩu không khớp
            checkLogin = false;
        }

        if (checkLogin === true) {
            let result = {
                DT: user,
                EC: 0,
                EM: "Login success"
            };
            return result;
        }
        else {
            let result = {
                DT: null,
                EC: -1,
                EM: "Email/Password invalid"
            };
            return result;
        }

    } catch (error) {
        let result = {
            DT: null,
            EC: -1,
            EM: error
        };
        return result;
    }
}

module.exports = {
    register,
    login,
}