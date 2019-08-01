export class Parser {
    stopWords:string[] = [
        "a", "is", "or", "the", "are", "aren't", "an", "as", "at", "be", "do",
        "by", "so", "that", "some", "then", "they", "this", "to", "up", "we",
        "i", "if", "it", "it's", "its", "me", "on", "our", "off", "i'll", 
        "i'd", "i've", "my", "of", "for", "and", "from"
    ]
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
            let booleanSymbols:string[] = [];
            let currentPhrase:string = "";
            let currentWord:string = "";

            for(let current:number = 0; current < userInput.length; current++) {
                let currentChar = userInput[current];

                if (currentChar === " ") {
                    if(currentWord === "AND" || currentWord === "OR" || currentWord === "NOT") {
                        if(currentPhrase.length)
                            parsedLines.push(currentPhrase.trim());

                        booleanSymbols.push(currentWord);

                        currentPhrase = "";
                    } else {
                        for(let i:number = 0; i < this.stopWords.length; i++) 
                            if(currentWord.toLowerCase() === this.stopWords[i]) {
                                currentWord = "";
                                currentChar = "";
                                break;
                            }

                        currentPhrase += currentWord + currentChar;
                    }

                    currentWord = "";
                }
                else
                    currentWord += currentChar;
            }

            for(let i:number = 0; i < this.stopWords.length; i++) 
                if(currentWord.toLowerCase() === this.stopWords[i]) {
                    currentWord = "";
                    break;
                }

            parsedLines.push(currentPhrase + currentWord);

            console.log(parsedLines);
            console.log(booleanSymbols);
            // if there was content return

            if(parsedLines.length) {
                return {parsedLines, booleanSymbols};
            } 
            
            return [];
        }

        return [];
    }
    
    parse(userInput:string, isKw:boolean) {
        // make sure there is userinput
        let parsedLines:string[][] = [];
        console.log("ParsedLines.length:  " + parsedLines.length);

        if(typeof(userInput) != "undefined" && userInput.length) {
            let current:number = 0, firstChar:number = 0;
            let booleanSymbols:string[] = [];
            let currentWord:string = "";
            let parsedLine:string[] = [];
            let isKwic = isKw;
        
            // parse each line then parse each line by words
            for(;current < userInput.length; current++) {
                const currentChar = userInput[current];

                // line parse
                if(currentChar === "$" && isKwic) {
                    parsedLine.push(currentWord);
                    parsedLines.push(parsedLine);
                    parsedLine = [];
                    currentWord = "";
                }
                else if(currentChar === " ") {
                    let isStopWord = false;
                    console.log(currentWord);

                    for(let i:number = 0; i < this.stopWords.length; i++) 
                        if(currentWord.toLowerCase() === this.stopWords[i]) {
                            isStopWord = true;  
                            break;
                        } 
                    
                    if(!isStopWord)
                        parsedLine.push(currentWord);

                    currentWord = "";
                }
                else
                    currentWord += currentChar;
            }
            
            let isStopWord = false;

            for(let i:number = 0; i < this.stopWords.length; i++) 
                if(currentWord.toLowerCase() === this.stopWords[i]) {
                    isStopWord = true;  
                    break;
                } 
            
            if(!isStopWord) {
                parsedLine.push(currentWord);
            }

            parsedLines.push(parsedLine);

            console.log(parsedLines);
            // if there was content return
            if(parsedLines.length) 
               return parsedLines;

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