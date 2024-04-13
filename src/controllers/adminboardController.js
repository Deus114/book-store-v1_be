const { getBoard } = require("../services/adminboardService")


module.exports = {
    getAdminBoard: async (req, res) => {
        let result = await getBoard()
        return res.status(200).json(
            {
                DT: result.DT,
                EC: result.EC,
                EM: result.EM
            }
        )
    },
}