const { getAllDrivers, getDetailDriver, getNameDriver, postDriver } = require("../controllers/driversControllers")

const getDriversHandler = async (req, res) => {
    try {
        const drivers = await getAllDrivers()
        return res.status(200).json(drivers)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getDetailHandler = async (req, res) => {
    const { id } = req.params

    const source = isNaN(id) ? "db" : "json"

    try {
        const detailDriver = await getDetailDriver(id, source)
        return res.status(200).json(detailDriver)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getNameHandler = async (req, res) => {
    const { name } = req.query
    const nameDriver = await getNameDriver(name)
    try {
        if (nameDriver.length === 0) return res.status(202).json(await getAllDrivers())
        return res.status(200).json(nameDriver)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const postDriverHandler = async (req, res) => {
    const { name, surname, description, image, nationality, dob } = req.body
    const createDriver = await postDriver(name, surname, description, image, nationality, dob)
    try {
        return res.status(200).json(createDriver)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = { getDriversHandler, getDetailHandler, getNameHandler, postDriverHandler }