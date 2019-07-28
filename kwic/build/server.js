"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiParser_1 = require("./api/apiKwic/apiParser");
const apiLineStorage_1 = require("./api/apiKwic/apiLineStorage");
const apiCyclicShifter_1 = require("./api/apiKwic/apiCyclicShifter");
const apiCombiner_1 = require("./api/apiKwic/apiCombiner");
const apiAlphabetizer_1 = require("./api/apiKwic/apiAlphabetizer");
const bodyparser = __importStar(require("body-parser"));
const db_1 = require("./back-end/database/db");
const apiDataBase_1 = require("./back-end/api/apiDataBase");
const apiSearcher_1 = require("./back-end/api/apiSearcher");
const apiLineParser_1 = require("./back-end/api/apiLineParser");
const app = express_1.default();
db_1.connectMongo();
const jsonParser = bodyparser.json();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}, jsonParser);
app.post("/KWIC", apiParser_1.apiParser, apiLineStorage_1.apiLineStorage, apiCyclicShifter_1.apiCyclicShifter, apiCombiner_1.apiCombiner, apiAlphabetizer_1.apiAlphabetizer);
app.post("/cyberminer", apiLineParser_1.apiLineParser, apiDataBase_1.apiDataBase, apiSearcher_1.apiSearcher);
// start server and listen to incoming request
app.listen(process.env.PORT || 8091, () => { console.log("Server started..."); });
