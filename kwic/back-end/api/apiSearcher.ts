import { CyberMinerRequestHandler } from "../classes/CyberMinerRequestHandler";
import { Searcher } from "../classes/Searcher";

export const apiSearcher:CyberMinerRequestHandler = (req, res, next) => {
    const userInput = req.parsedInput;
    const webPageData = req.queryResults;
    const searchResults = searchData(userInput, webPageData, new Searcher(), req.booleanSymbols);

    res.json({searchResults: searchResults});
}

const searchData = (userInput:any, pageData:any, searcher:Searcher, booleanSymbols:any) => searcher.search(userInput, pageData, booleanSymbols);
