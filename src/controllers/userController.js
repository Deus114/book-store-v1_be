const { createUser, getallUser, updateUser, delUser } = require("../services/userService");
const { sFile } = require("../services/file");
const fs = require('fs');

// Function to convert file to base64
const convertFileToBase64 = (filePath) => {
    // Read file as binary data
    const fileData = fs.readFileSync(filePath);

    // Convert binary data to base64 string
    const base64Data = fileData.toString('base64');

    return base64Data;
}

module.exports = {
    postCreateUser: async (req, res) => {
        let { username, password, address, phone, email, role } = req.body;
        let image = ""

        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        }
        else {
            let result = await sFile(req.files.image);
            let path = result.path;
            image = convertFileToBase64(path);
        }
        let data = {
            username, password, address, phone, email, role, image
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
        let image = ""

        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        }
        else {
            let result = await sFile(req.files.image);
            let path = result.path;
            image = convertFileToBase64(path);
        }
        let data = {
            id, username, phone, address, role, image
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