import { CyberMinerRequestHandler, CyberMinerRequest } from "../classes/CyberMinerRequestHandler";
import { DataBase } from "../classes/Database";

export const apiDataBase:CyberMinerRequestHandler = (req, res, next) => {
    const db = new DataBase();
    db.readFromDb().then( data => {
        req.queryResults = data;
        console.log((req.queryResults));
        next();
    })
}
