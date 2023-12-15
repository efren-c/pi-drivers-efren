const { infoDrivers, driversData } = require("../functions/functions.index")
const { Driver, Team } = require('../db')
const { Op } = require('sequelize')

/* const createDriverDB = async (id, name, surname, description, image, nationality, dob) => {
    return await Driver.create({ id, name, surname, description, image, nationality, dob })
} */

const getAllDrivers = async () => {
    const driversDB = await Driver.findAll()
    const driversJson = await infoDrivers()

    return driversJson.concat(driversDB)
}

const getDetailDriver = async (id) => {
    if (!isNaN(id)) {
        console.log(driversData.id); //driversData trae toda la info | driversData.id undefined
        return driversData.id
    } else {
        const driver = await Driver.findOne(id)
        return driver
    }
}

const getNameDriver = async (name) => {
    const driverFilterJson = ((await infoDrivers()).filter((driver) => driver.name.toLowerCase().includes(name.toLowerCase())))
    const driverFilterDB = await Driver.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } })

    return [...driverFilterJson, ...driverFilterDB]
}

const postDriver = async (name, surname, description, image, nationality, dob) => {
    const newDriver = await Driver.create({ name, surname, description, image, nationality, dob })

    return newDriver
}

module.exports = { getAllDrivers, getDetailDriver, getNameDriver, postDriver }