const { register, login } = require("../services/authService");

module.exports = {
    postRegister: async (req, res) => {
        let { email, username, password } = req.body;
        let role = "USER";
        let address = "";
        let phone = "";
        let data = {
            username, password, address, phone, email, role
        }
        let result = await register(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },
    postLogin: async (req, res) => {
        let { email, password } = req.body;
        let data = {
            email, password
        }
        let result = await login(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    }
}