const connection = require('../config/database');
const User = require('../models/user');

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('homepage.ejs', { listUser: results });
}

module.exports = {
    getHomepage,
}