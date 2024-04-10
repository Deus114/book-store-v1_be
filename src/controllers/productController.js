const { createProduct, getallProduct, updateProduct, delProduct, getProductnew, getProductbuy, getProductbyCat } = require("../services/productService");
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
    postCreateProduct: async (req, res) => {
        let { name, price, category, desc, author, nxb, buy, watch, status } = req.body;
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
            name, price, category, desc, author, nxb, buy, watch, status, image
        }
        let result = await createProduct(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getAllProduct: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let result = await getallProduct(page, limit);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getProductNew: async (req, res) => {
        let limit = 8;
        let result = await getProductnew(limit);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getProductBuy: async (req, res) => {
        let limit = 8;
        let result = await getProductbuy(limit);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    getProductByCat: async (req, res) => {
        let category = req.query.category;
        let result = await getProductbyCat(category);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    putUpdateProduct: async (req, res) => {
        let { name, price, category, desc, author, nxb, buy, watch, status, id } = req.body;

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
            name, price, category, desc, author, nxb, buy, watch, status, image, id
        }
        let result = await updateProduct(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    deleteProduct: async (req, res) => {
        let id = req.body.id;
        let result = await delProduct(id);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    }
}