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
const websiteSchema = new mongoose.Schema({
    link: String,
    url: String,
    description: String,
    payments: Number,
    visits: Number
});
exports.Website = mongoose.model("Website", websiteSchema);
const testData1 = {
    link: "https://www.google.com",
    url: "1google.com",
    description: "google",
    payments: 0,
    visits: 1
};
const testData2 = {
    link: "https://www.google.com",
    url: "2google.com",
    description: "google",
    payments: 0,
    visits: 2
};
exports.Website.find().then(data => {
    if (data.length == 0) {
        new exports.Website(testData1).save()
            .then(data => console.log("saved"))
            .catch(error => console.log(error));
        new exports.Website(testData2).save()
            .then(data => console.log("saved"));
    }
    ;
});
