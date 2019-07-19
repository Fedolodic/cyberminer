"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parser {
    /****************
     *    methods   *
     ****************/
    // parses the string into an array of words for
    // shifting
    /****************
     *    methods   *
     ****************/
    // parses the string into an array of words for
    // shifting
    parse(userInput) {
        // make sure there is userinput
        let parsedLines = [];
        console.log("ParsedLines.length:  " + parsedLines.length);
        if (typeof (userInput) != "undefined" && userInput.length) {
            let current = 0, firstChar = 0;
            // parse each line then parse each line by words
            for (; current < userInput.length; current++) {
                // line parse
                if (userInput[current] === "$") {
                    parsedLines.push(this._getSubString(userInput, firstChar, current));
                    firstChar = current + 1;
                }
            }
            parsedLines.push(this._getSubString(userInput, firstChar, current + 1));
            console.log(parsedLines);
            // if there was content return
            if (parsedLines.length) {
                return parsedLines;
            }
            return [];
        }
        return [];
    }
    _getSubString(str, firstChar, currentChar) {
        let newLine = str.substring(firstChar, currentChar);
        newLine = newLine.trim();
        console.log(newLine);
        // word parse
        return newLine.split(" ");
    }
}
exports.Parser = Parser;
;
