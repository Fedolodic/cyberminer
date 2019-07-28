"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Searcher_1 = require("../classes/Searcher");
exports.apiSearcher = (req, res, next) => {
    const userInput = req.parsedInput;
    const webPageData = req.queryResults;
    const searchResults = searchData(userInput, webPageData, new Searcher_1.Searcher());
    res.json({ searchResults: searchResults });
};
const searchData = (userInput, pageData, searcher) => searcher.search(userInput, pageData);
