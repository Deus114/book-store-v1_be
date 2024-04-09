const Customer = require('../models/customer');
const { sFile } = require('../services/file')

const postSFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await sFile(req.files.image);
    console.log('>>>', result)
    return res.send("hello")
};

module.exports = {
    postSFile,
}