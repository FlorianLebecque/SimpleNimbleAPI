const Sequilize = require("sequelize");
const db = new Sequilize(
    "simplenimbleapi",
    "dmy",
    "123",
    {
        dialect:"mysql",
        host:"localhost"
    }
);

module.exports = db;