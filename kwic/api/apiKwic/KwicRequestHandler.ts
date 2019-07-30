import { Request, Response, NextFunction} from "express";
import { request } from "http";

export interface KwicRequest extends Request {
    ParsedString?:string[][]
    StoredString?:string[][]
    ShiftedString?:string[][][]
    CombinedString?:string[][]
    CombinedResults?:string[][],
    webPageDetails?:any,
    parsedDesc?:string[][][],
    shiftedDesc?:string[][][][],
    CombinedDesc?:string[][][]
}

export interface KwicResponse extends Response {

}

export type KwicRequestHandler = (req:KwicRequest, res:KwicResponse, next:NextFunction) => any;