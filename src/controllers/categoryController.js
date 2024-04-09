const { createCategory, getallCategory, delCategory, updateCategory } = require("../services/categoryService");

module.exports = {
    postCreateCategory: async (req, res) => {
        let { name, status } = req.body;
        let data = {
            name, status
        }
        let result = await createCategory(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },
    getAllCategory: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let result = await getallCategory(page, limit);

        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    putUpdateCategory: async (req, res) => {
        let { name, status, id } = req.body;
        let data = {
            name, status, id
        }
        let result = await updateCategory(data);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },

    deleteCategory: async (req, res) => {
        let id = req.body.id;
        let result = await delCategory(id);
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    }
}