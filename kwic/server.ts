
import express from "express";
import { apiParser as parser} from "./api/apiKwic/apiParser";
import { apiLineStorage as lineStorage} from "./api/apiKwic/apiLineStorage";
import { apiCyclicShifter as cyclicShifter } from "./api/apiKwic/apiCyclicShifter";
import { apiCombiner as combiner} from "./api/apiKwic/apiCombiner";
import { apiAlphabetizer as alphabetizer} from "./api/apiKwic/apiAlphabetizer";
import * as bodyparser from "body-parser";
import { connectMongo } from "./back-end/database/db";
import { apiDataBase  as dataBase } from "./back-end/api/apiDataBase";

const app = express();

connectMongo();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const jsonParser = bodyparser.json();

app.post("/KWIC", jsonParser, parser, lineStorage, cyclicShifter, combiner, alphabetizer);
app.post("/cyberminer", jsonParser, dataBase);
// start server and listen to incoming request
app.listen(process.env.PORT || 8091, () => {console.log("Server started...")});