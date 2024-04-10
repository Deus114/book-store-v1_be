const express = require('express');
const routerAPI = express.Router();

// const { postSFile } = require('../controllers/apiController');
const { postCreateUser, getAllUser, putUpdateUser, deleteUser } = require('../controllers/userController');
const { postRegister, postLogin } = require('../controllers/authController');
const { postCreateCategory, getAllCategory, putUpdateCategory, deleteCategory } = require('../controllers/categoryController');
const { postCreateProduct, getAllProduct, putUpdateProduct, deleteProduct, getProductNew, getProductBuy, getProductByCat } = require('../controllers/productController');

// routerAPI.post('/file', postSFile);
routerAPI.post('/user', postCreateUser);
routerAPI.get('/users', getAllUser);
routerAPI.put('/update-user', putUpdateUser);
routerAPI.delete('/delete-user', deleteUser);

routerAPI.post('/category', postCreateCategory);
routerAPI.get('/categories', getAllCategory);
routerAPI.put('/update-category', putUpdateCategory);
routerAPI.delete('/delete-category', deleteCategory);

routerAPI.post('/product', postCreateProduct);
routerAPI.get('/products', getAllProduct);
routerAPI.get('/products-new', getProductNew);
routerAPI.get('/products-buy', getProductBuy);
routerAPI.get('/products-by-category', getProductByCat);
routerAPI.put('/update-product', putUpdateProduct);
routerAPI.delete('/delete-product', deleteProduct);

routerAPI.post('/register', postRegister);
routerAPI.post('/login', postLogin);

module.exports = routerAPI;