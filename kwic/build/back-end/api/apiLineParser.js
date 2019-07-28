"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("../../api/apiKwic/Parser");
exports.apiLineParser = (req, res, next) => {
    const input = req.body.input;
    req.parsedInput = parseLine(new Parser_1.Parser(), input);
    next();
};
const parseLine = (parser, input) => parser.cyberParse(input);
