import { Request, Response, NextFunction} from "express";

export interface cyberMinerRequest extends Request {
    searchQuery?:string[]
    ParsedString?:string[][]
    dbData?:any
    parsedDbData?:string[][]
    searchResults?:string[][]
    combinedSearchResult?:string[]
}

export interface cyberMinerResponse extends Response {

}

export type KwicRequestHandler = (req:cyberMinerRequest, res:cyberMinerResponse, next:NextFunction) => any;