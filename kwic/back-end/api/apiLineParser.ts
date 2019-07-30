import { CyberMinerRequestHandler } from "../classes/CyberMinerRequestHandler";
import { Parser } from "../../api/apiKwic/Parser";

export const apiLineParser:CyberMinerRequestHandler = (req, res, next) => {
    const input = req.body.input;
    let parsedInput:any = parseLine(new Parser(), input);
    req.parsedInput = parsedInput.parsedLines;
    req.booleanSymbols = parsedInput.booleanSymbols;;
    next();
};

const parseLine = (parser:Parser, input:any) => parser.cyberParse(input);