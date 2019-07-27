"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const website_1 = require("../database/website");
class DataBase {
    constructor() {
        this.readFromDb = () => {
            return website_1.Website.find();
        };
        this.selectFromDb = () => {
        };
        this.deleteFromDb = () => {
        };
        this.InsertToDb = () => {
        };
        this.updateDb = () => {
        };
        this.validateUrl = () => {
        };
    }
}
exports.DataBase = DataBase;
