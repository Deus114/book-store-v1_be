const Category = require("../models/category");

module.exports = {
    createCategory: async (data) => {
        try {
            let res = await Category.create({
                name: data.name,
                status: data.status,
            })
            let result = {
                DT: res,
                EC: 0,
                EM: "Create category success"
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
    },

    // Paginate
    getallCategory: async (page, limit) => {
        try {
            if (limit && page) {
                let offset = (page - 1) * limit;
                let totalPage = (await Category.find()).length / limit;
                let res = await Category.find().skip(offset).limit(limit).exec();
                let result = {
                    DT: {
                        totalPages: Math.ceil(totalPage),
                        categories: res
                    },
                    EC: 0,
                    EM: "GetAll list category succeed"
                };
                return result;
            }
            else {
                let res = await Category.find();
                let result = {
                    DT: res,
                    EC: 0,
                    EM: "GetAll list category succeed"
                };
                return result;
            }

        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "GetAll list category failed"
            };
            return result;
        }
    },

    updateCategory: async (data) => {
        try {
            let res = await Category.updateOne({ _id: data.id },
                {
                    name: data.name,
                    status: data.status,
                });
            let result = {
                DT: res,
                EC: 0,
                EM: "Update category succeed"
            };
            return result;

        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Update category failed"
            };
            return result;
        }
    },

    delCategory: async (id) => {
        try {
            let res = await Category.deleteOne({ _id: id });
            let result = {
                DT: res,
                EC: 0,
                EM: "Delete category succeed"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Delete category failed"
            };
            return result;
        }
    }
}