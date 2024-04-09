const Product = require("../models/product");

module.exports = {
    createProduct: async (data) => {
        try {
            let res = await Product.create({
                name: data.name,
                price: data.price,
                category: data.category,
                desc: data.desc,
                author: data.author,
                nxb: data.nxb,
                buy: "0",
                watch: "0",
                status: data.status,
                image: data.image,
            })
            let result = {
                DT: res,
                EC: 0,
                EM: "Create Product success"
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
    getallProduct: async (page, limit) => {
        try {
            let offset = (page - 1) * limit;
            let totalPage = (await Product.find()).length / limit;
            let res = await Product.find().skip(offset).limit(limit).exec();
            let result = {
                DT: {
                    totalPages: Math.ceil(totalPage),
                    products: res
                },
                EC: 0,
                EM: "GetAll list product succeed"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "GetAll list product failed"
            };
            return result;
        }
    },

    getProductnew: async (limit) => {
        try {

            let res = await Product.find({ status: "SHOW" }).sort({ createdAt: -1 }).limit(limit).exec()
            let result = {
                DT: res,
                EC: 0,
                EM: "GetAll list product succeed"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "GetAll list product failed"
            };
            return result;
        }
    },

    updateProduct: async (data) => {
        try {
            if (data.image === "") {
                let res = await Product.updateOne({ _id: data.id },
                    {
                        name: data.name,
                        price: data.price,
                        category: data.category,
                        desc: data.desc,
                        author: data.author,
                        nxb: data.nxb,
                        buy: data.buy,
                        watch: data.watch,
                        status: data.status,
                    });
                let result = {
                    DT: res,
                    EC: 0,
                    EM: "Update Product succeed"
                };
                return result;
            }
            else {
                let res = await Product.updateOne({ _id: data.id },
                    {
                        name: data.name,
                        price: data.price,
                        category: data.category,
                        desc: data.desc,
                        author: data.author,
                        nxb: data.nxb,
                        buy: data.buy,
                        watch: data.watch,
                        status: data.status,
                        image: data.image
                    });
                let result = {
                    DT: res,
                    EC: 0,
                    EM: "Update Product succeed"
                };
                return result;
            }

        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Update category failed"
            };
            return result;
        }
    },

    delProduct: async (id) => {
        try {
            let res = await Product.deleteOne({ _id: id });
            let result = {
                DT: res,
                EC: 0,
                EM: "Delete product succeed"
            };
            return result;
        } catch (error) {
            let result = {
                DT: null,
                EC: -1,
                EM: "Delete product failed"
            };
            return result;
        }
    }
}