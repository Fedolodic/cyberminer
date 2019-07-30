import { RequestHandler } from "express";
import { bool, string } from "prop-types";

export class Parser {
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
    cyberParse(userInput:string) {
        if(userInput.length) {
            let parsedLines:string[] = [];
            let current:number = 0, firstChar:number = 0;
            let booleanSymbols:string[] = [];
            let currentWord:string = "";
            let currentPhrase:string = "";
            let parsedData = [];

            for(;current < userInput.length; current++) {
                const currentChar = userInput[current];
        
                if (currentChar === " ") {
                    if(currentWord === "AND" || currentWord === "OR" || currentWord === "NOT") {
                        if(currentPhrase.length)
                            parsedLines.push(currentPhrase.trim());

                        booleanSymbols.push(currentWord);

                        currentPhrase = "";
                    } else 
                        currentPhrase += currentWord + currentChar;

                    currentWord = "";
                }
                else
                    currentWord += currentChar;
            }

            parsedLines.push(currentPhrase + currentWord);

            console.log(parsedLines);
            console.log(booleanSymbols);
            // if there was content return
            if(parsedLines.length) {
                return {parsedLines, booleanSymbols};
            } 
            
            return undefined;
        }

        return undefined;
    }
    
    parse(userInput:string) {
        // make sure there is userinput
        let parsedLines:string[][] = [];
        console.log("ParsedLines.length:  " + parsedLines.length);

        if(typeof(userInput) != "undefined" && userInput.length) {
            let current:number = 0, firstChar:number = 0;
            let booleanSymbols:string[] = [];
            let currentWord:string = "";

            // parse each line then parse each line by words
            for(;current < userInput.length; current++) {
                const currentChar = userInput[current];

                // line parse
                if(currentChar === "$") {
                    const subString = this._getSubString(userInput, firstChar, current);
                    parsedLines.push(
                        this._parseSubString(subString)
                    );

                    firstChar = current + 1;
                }
                
               
            }

            const subString = this._getSubString(userInput, firstChar, current + 1)
            
            parsedLines.push(
                this._parseSubString(subString), 
            );

            console.log(parsedLines);
            // if there was content return
            if(parsedLines.length) {
                    return parsedLines;
            } 
            
            return [];
        }

        return [];
    }

    _getSubString(str:string, firstChar:number, currentChar:number) {
        let newLine:string = 
        str.substring(firstChar, currentChar);
        newLine = newLine.trim();
        console.log("newLIne:  ", newLine);
        // word parse
        return newLine;
    }

    _parseSubString(str:string) {
        return str.split(" ");
    }
};