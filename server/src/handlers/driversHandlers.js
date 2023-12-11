const { getAllDrivers, getDetailDriver, getNameDriver, postDriver } = require("../controllers/driversControllers")

/* const getDriversHandler = async (req, res) => {
    const { name } = req.query
    try {
        if (!name) {
            const allDogs = await getAllDrivers()
            return res.status(200).json(allDogs)
        } else {
            return getNameHandler(req, res)
        }
    } catch (error) {
        return res.status(404).send(error)
    }
} */

const getNameHandler = async (req, res) => {
    const { name } = req.query
    const nameDriver = await getNameDriver(name)
    try {
        if (nameDriver.length === 0) return res.status(202).json(getAllDrivers())
        return res.status(200).json(nameDriver)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { getDriversHandler, getNameHandler }