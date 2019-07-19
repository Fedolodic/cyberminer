"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Combiner {
    /****************
     *    methods   *
     ****************/
    // combines lines back together
    combineResults(parsedString) {
        let combinedString = [];
        // make sure there is content
        if (parsedString && parsedString.length) {
            let combinedLine = [];
            // combining
            for (let i = 0; i < parsedString.length; i++)
                combinedLine[i] = this.combineLineGroups(parsedString[i]);
            // if content return to the user
            if (combinedString)
                return combinedLine;
            return [];
        }
        return [];
    }
    combineLineGroups(parsedLineGroups) {
        if (parsedLineGroups && parsedLineGroups.length) {
            let combinedLineGroups = [];
            for (let i = 0; i < parsedLineGroups.length; i++)
                combinedLineGroups[i] = this.combineLine(parsedLineGroups[i]);
            if (combinedLineGroups && combinedLineGroups.length)
                return combinedLineGroups;
            return [];
        }
        return [];
    }
    combineLine(parsedLine) {
        let combinedLine = "";
        if (parsedLine && parsedLine.length) {
            let lastWord = parsedLine.length - 1;
            for (let i = 0; i < lastWord; i++)
                combinedLine += (parsedLine[i] + " ");
            combinedLine += parsedLine[lastWord];
            if (combinedLine)
                return combinedLine;
            return "";
        }
        return "";
    }
}
exports.Combiner = Combiner;
