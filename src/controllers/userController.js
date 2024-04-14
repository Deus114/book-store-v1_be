const { createUser, getallUser, updateUser, delUser } = require("../services/userService");

module.exports = {
    postCreateUser: async (req, res) => {
        let { username, password, address, phone, email, role } = req.body;
        let data = {
            username, password, address, phone, email, role
        }
        let result = await createUser(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getAllUser: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;

        let result = await getallUser(page, limit);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    putUpdateUser: async (req, res) => {
        let { id, username, phone, address, role } = req.body;

        let data = {
            id, username, phone, address, role
        }
        let result = await updateUser(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    deleteUser: async (req, res) => {
        let id = req.body.id;
        let result = await delUser(id);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    }
}