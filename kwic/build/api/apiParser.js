"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./apiKwic/Parser");
// middleware for parsing lines
exports.apiParser = (req, res, next) => {
    const input = req.body.string_To_Shift || req.body.webPageDetails;
    req.webPageDetails = req.body.webPageDetails;
    let parsedString = [];
    let parsedDesc = [];
    if (typeof (input) === "string")
        parsedString = parseInput(new Parser_1.Parser(), input);
    else {
        input.forEach((webPage) => {
            console.log(webPage.description);
            const shiftedLines = parseInput(new Parser_1.Parser(), webPage.description);
            parsedDesc.push(shiftedLines);
        });
    }
    if (parsedString.length) {
        req.ParsedString = parsedString;
        next();
    }
    else if (parsedDesc.length) {
        req.parsedDesc = parsedDesc;
        next();
    }
    else {
        next(new Error("There was no String to Parse. Please add input."));
    }
};
const parseInput = (inputParser, input) => {
    return inputParser.parse(input);
};
