"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const website_1 = require("../database/website");
const fetch = require("node-fetch");
class DataBase {
    constructor() {
        this.readFromDb = () => {
            return website_1.Website.find();
            /*let validPages:any = [];
    
            Website.find()
            .then(webPages => {
                console.log(webPages);
                webPages.forEach((data:any) => {
                    const isValid = this.validateUrl(data.link);
                    
                    if(isValid)
                        validPages.push(data);
                });
            });
    
            return validPages;*/
        };
        this.selectFromDb = () => {
        };
        this.deleteFromDb = () => {
        };
        this.InsertToDb = () => {
        };
        this.updateDb = () => {
        };
        this.validateUrl = async (webPage) => {
            let isValid = false;
            let response = await fetch("https://www.dfdfd.com", { method: "TRACE" });
            const json = await response.json();
            console.log(JSON.parse(json));
            console.log("results:  ", isValid);
        };
    }
}
exports.DataBase = DataBase;
