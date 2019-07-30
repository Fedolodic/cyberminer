import { RequestHandler } from "express";
import { Parser } from "./Parser";
import { KwicRequestHandler } from "./KwicRequestHandler";

// middleware for parsing lines
export const apiParser:KwicRequestHandler = (req, res, next) => {
    const input:any = req.body.string_To_Shift || req.body.webPageDetails;
    req.webPageDetails = req.body.webPageDetails;
    let parsedString:string[][] = []
    let parsedDesc:string[][][] = [];

    if(typeof(input) === "string")
        parsedString = parseInput(new Parser(), input);
    else {
        input.forEach((webPage:any) => {
            console.log(webPage.description)
            const shiftedLines = parseInput(new Parser(), webPage.description);
            parsedDesc.push(shiftedLines);
        })}

    if(parsedString.length) {
        req.ParsedString = parsedString;
        next();
    } else if(parsedDesc.length) {
        req.parsedDesc = parsedDesc;
        next();
    }
    else {
        next(
            new Error("There was no String to Parse. Please add input."
        ));
    }

}

const parseInput = (inputParser:Parser, input:string) => {
    return inputParser.parse(input);
}
