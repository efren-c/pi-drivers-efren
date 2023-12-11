const { Router } = require("express")
const { getDriversHandler } = require("../handlers/driversHandlers")

const driversRouter = Router()

driversRouter.get('/', getDriversHandler)
/* driversRouter.get('/:id', getDetailHandler)
driversRouter.post('/', postDriverHandler) */

module.exports = driversRouter