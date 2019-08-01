import { CyberMinerRequestHandler, CyberMinerRequest } from "../classes/CyberMinerRequestHandler";
import { DataBase } from "../classes/DataBase";

export const apiDb:CyberMinerRequestHandler = (req, res, next) => {
    const link = req.body.link;
    const db = new DataBase();

    db.updateDb(link);

    res.json();
}
