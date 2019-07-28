"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../classes/Database");
exports.apiDataBase = (req, res, next) => {
    const db = new Database_1.DataBase();
    db.readFromDb().then(data => {
        req.queryResults = data;
        next();
    });
};
