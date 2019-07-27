"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connectMongo() {
    mongoose_1.default.connect("mongodb+srv://fedoledi_westbrook:fedoledi%5Fwestbrook@cluster0-nd9rj.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
        .then(() => console.log("Connected to Mongo"))
        .catch(error => { console.log(error); });
}
exports.connectMongo = connectMongo;
