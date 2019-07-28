import { CyberMinerRequestHandler } from "../classes/CyberMinerRequestHandler";
import { Parser } from "../../api/apiKwic/Parser";

export const apiLineParser:CyberMinerRequestHandler = (req, res, next) => {
    const input = req.body.input;
    req.parsedInput = parseLine(new Parser(), input);
    next();
};

const parseLine = (parser:Parser, input:any) => parser.cyberParse(input);