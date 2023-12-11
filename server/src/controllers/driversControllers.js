const { infoDrivers } = require("../functions/functions.index")
const { Driver, Team } = require('../db')

const createDriverDB = async (id, name, surname, description, image, nationality, dob) => {
    return await Driver.create({ id, name, surname, description, image, nationality, dob })
}

const getAllDrivers = async () => {
    const driversDB = await Driver.findAll()
    const driversJson = await infoDrivers()

    return [...driversDB, ...driversJson]
}

const getDetailDriver = async (id, source) => {
    const driver = source === "json"
        ? infoDrivers
        : await Driver.findByPk(id)

    return driver
}

module.exports = { getAllDrivers, getDetailDriver }