"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("../../api/apiKwic/Parser");
exports.apiLineParser = (req, res, next) => {
    const input = req.body.input;
    let parsedInput = parseLine(new Parser_1.Parser(), input);
    req.parsedInput = parsedInput.parsedLines;
    req.booleanSymbols = parsedInput.booleanSymbols;
    ;
    next();
};
const parseLine = (parser, input) => parser.cyberParse(input);
