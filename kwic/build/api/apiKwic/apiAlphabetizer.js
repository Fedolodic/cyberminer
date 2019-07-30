"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alphabetizer_1 = require("./Alphabetizer");
// middleware for the sorter
exports.apiAlphabetizer = (req, res, next) => {
    // get the combined string
    let stringsToSort = req.CombinedString;
    let descToSort = req.CombinedDesc;
    // if content then sort the string and send back to user
    if (typeof (stringsToSort) != "undefined" && stringsToSort.length) {
        let sortedStrings = sortResults(new Alphabetizer_1.Alphabetizer(), stringsToSort, ">");
        res.json({
            cyclicallyShifted: req.CombinedResults,
            alphabeticallyShifted: sortedStrings
        });
    }
    else if (typeof (descToSort) != "undefined" && descToSort.length) {
        let sortedDesc = descToSort.map(desc => {
            return sortResults(new Alphabetizer_1.Alphabetizer(), desc, ">");
        });
        console.log("sortedDesc:  ", sortedDesc);
        let webPages = req.webPageDetails;
        webPages.forEach((page, index) => {
            page.shiftedLines = sortedDesc[index];
        });
        res.json({
            webPageDetails: webPages
        });
    }
};
const sortResults = (stringSorter, shiftResults, sortType) => {
    let sortResults = [];
    if (Array.isArray(shiftResults) && shiftResults.length) {
        // if sorting in ascending order
        if (sortType === ">")
            // for each result array sort the lines
            for (let i = 0; i < shiftResults.length; i++) {
                let lines = shiftResults[i];
                // ascending order quick sort
                sortResults.push(stringSorter.lexicographicQuickSort(lines, 0, lines.length - 1));
            }
        return sortResults;
    }
    return [];
};
