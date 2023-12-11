const drivers = require("../../api/db.json").drivers

getAllDrivers = (req, res) => {
    res.json(drivers)
}