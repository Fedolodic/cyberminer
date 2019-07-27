import { CyberMinerRequestHandler } from "../classes/CyberMinerRequestHandler";
import { DataHandler } from "../classes/DataHandler";

export const apiDataHandler:CyberMinerRequestHandler = (req, res, next) => {
    const queryResults = req.queryResults;
};

const handleData = (dataHandler:DataHandler, queryResults:Object) => {
    dataHandler.handleData(queryResults);

}