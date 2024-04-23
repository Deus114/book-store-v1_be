const express = require('express');
const routerAPI = express.Router();
const PayOS = require('@payos/node');

const payos = new PayOS(
    '4fd21a1c-4e11-449d-abd1-728a31f90cb8',
    '993ce946-9a6d-45c1-ae74-f8b65830b894',
    'a63d5cde006b6d116d9c3116e0ea5daa28882bf897a16efcffea4a4727dc4aec'
);

// const { postSFile } = require('../controllers/apiController');
const { postCreateUser, getAllUser, putUpdateUser, deleteUser } = require('../controllers/userController');
const { postRegister, postLogin } = require('../controllers/authController');
const { postCreateCategory, getAllCategory, putUpdateCategory, deleteCategory } = require('../controllers/categoryController');
const { postCreateProduct, getAllProduct, putUpdateProduct, deleteProduct, getProductNew, getProductBuy, getProductByCat } = require('../controllers/productController');
const { postAddCart, getCart, delCart, delAllCart } = require('../controllers/cartController');
const { getAdminBoard } = require('../controllers/adminboardController');
const { postOrder, orderByID } = require('../controllers/orderController');
const { makeOrder } = require('../services/orderServiec');

// routerAPI.post('/file', postSFile);
// User api
routerAPI.post('/user', postCreateUser);
routerAPI.get('/users', getAllUser);
routerAPI.put('/update-user', putUpdateUser);
routerAPI.delete('/delete-user', deleteUser);

// Category api
routerAPI.post('/category', postCreateCategory);
routerAPI.get('/categories', getAllCategory);
routerAPI.put('/update-category', putUpdateCategory);
routerAPI.delete('/delete-category', deleteCategory);

// Product api
routerAPI.post('/product', postCreateProduct);
routerAPI.get('/products', getAllProduct);
routerAPI.get('/products-new', getProductNew);
routerAPI.get('/products-buy', getProductBuy);
routerAPI.get('/products-by-category', getProductByCat);
routerAPI.put('/update-product', putUpdateProduct);
routerAPI.delete('/delete-product', deleteProduct);

// Cart api
routerAPI.post('/cart', postAddCart);
routerAPI.get('/user-cart', getCart);
routerAPI.delete('/delete-cart', delCart);
routerAPI.delete('/delete-allcart', delAllCart);

// Order api
routerAPI.post('/order', postOrder);
routerAPI.get('/order-by-id', orderByID);

// Auth api
routerAPI.post('/register', postRegister);
routerAPI.post('/login', postLogin);

// Admin board Api
routerAPI.get('/admin-board', getAdminBoard);

// PayOs
routerAPI.post('/create-payment-link', async (req, res) => {
    const order = await makeOrder();
    const paymentLink = await payos.createPaymentLink(order);
    return res.status(200).json(
        {
            DT: paymentLink.checkoutUrl
        }
    )
});

module.exports = routerAPI;