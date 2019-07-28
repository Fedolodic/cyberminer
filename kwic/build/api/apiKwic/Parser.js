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
    cyberParse(userInput) {
        if (userInput.length) {
            let parsedLines = [];
            let current = 0, firstChar = 0;
            let booleanSymbols = [];
            let currentWord = "";
            let currentPhrase = "";
            for (; current < userInput.length; current++) {
                const currentChar = userInput[current];
                if (currentChar === " ") {
                    if (currentWord === "AND" || currentWord === "OR" || currentWord === "NOT") {
                        if (currentPhrase.length)
                            parsedLines.push(currentPhrase.trim());
                        parsedLines.push(currentWord);
                        currentPhrase = "";
                    }
                    else
                        currentPhrase += currentWord + currentChar;
                    currentWord = "";
                }
                else
                    currentWord += currentChar;
            }
            parsedLines.push(currentPhrase + currentWord);
            console.log(parsedLines);
            // if there was content return
            if (parsedLines.length) {
                return parsedLines;
            }
            return [];
        }
        return [];
    }
    parse(userInput) {
        // make sure there is userinput
        let parsedLines = [];
        console.log("ParsedLines.length:  " + parsedLines.length);
        if (typeof (userInput) != "undefined" && userInput.length) {
            let current = 0, firstChar = 0;
            let booleanSymbols = [];
            let currentWord = "";
            // parse each line then parse each line by words
            for (; current < userInput.length; current++) {
                const currentChar = userInput[current];
                // line parse
                if (currentChar === "$") {
                    const subString = this._getSubString(userInput, firstChar, current);
                    parsedLines.push(this._parseSubString(subString));
                    firstChar = current + 1;
                }
            }
            const subString = this._getSubString(userInput, firstChar, current + 1);
            parsedLines.push(this._parseSubString(subString));
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
        console.log("newLIne:  ", newLine);
        // word parse
        return newLine;
    }
    _parseSubString(str) {
        return str.split(" ");
    }
}
exports.Parser = Parser;
;
