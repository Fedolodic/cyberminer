import { Website } from "../database/website";
const fetch = require("node-fetch");

export class DataBase {
    
    readFromDb = () => {
        return Website.find();
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
    }

    selectFromDb = () => {
        
    }

    deleteFromDb = () => {

    }

    InsertToDb = () => {
    
    }

    updateDb = () => {

    }

    validateUrl = async (webPage:any) => {
        let isValid = false;
        let response = await fetch("https://www.dfdfd.com", { method: "TRACE" })
        const json = await response.json();
        
        console.log(JSON.parse(json));
        console.log("results:  ", isValid);
    }
}