const path = require("path");

const sFile = async (file) => {
    let uploadPath = path.resolve(__dirname, "../public/images/uploads");

    let extName = path.extname(file.name);
    let baseName = path.basename(file.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;

    try {
        await file.mv(finalPath)
        return {
            status: 'succes',
            path: finalPath,
            error: null
        }
    } catch (error) {
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        }
    }
}

module.exports = {
    sFile,
}