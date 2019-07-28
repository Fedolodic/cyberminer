import { Request, Response, NextFunction} from "express";

export interface CyberMinerRequest extends Request {
    input?:string
    SearchResults?:any
    parsedInput?:string[],
    queryResults?:any
}

export interface CyberMinerResponse extends Response {

}

export type CyberMinerRequestHandler = (req:CyberMinerRequest, res:CyberMinerResponse, next:NextFunction) => any;