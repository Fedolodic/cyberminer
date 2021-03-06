import { Request, Response, NextFunction} from "express";
import axios from "axios";

export interface CyberMinerRequest extends Request {
    input:string,
    queryResults:any,
    searchResults:any
}

export interface CyberMinerResponse extends Response {

}

export type CyberMinerRequestHandler = (req:CyberMinerRequest, res:CyberMinerResponse, next:NextFunction) => any;