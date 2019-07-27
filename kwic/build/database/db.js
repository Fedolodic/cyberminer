"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
function connectMongo() {
    mongoose.connect("mongodb+srv://fedoledi_westbrook:fedoledi_westbrook@cluster0-nd9rj.mongodb.net/test?retryWrites=true&w=majority");
}
exports.connectMongo = connectMongo;
