"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../classes/Database");
exports.apiDb = (req, res, next) => {
    const db = new Database_1.DataBase();
    req.body.text();
    db.readFromDb().then(data => {
        res.json(data);
    });
};
