"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CyclicShifter_1 = require("./CyclicShifter");
// shifter middleware 
exports.apiCyclicShifter = (req, res, next) => {
    let stringToShift = req.ParsedString;
    let parsedDesc = req.parsedDesc; // get string to shift
    let shiftedString = [];
    let shiftedDesc = [];
    // if not undefined the shift and send to next piece of middleware
    if (typeof (stringToShift) != "undefined")
        shiftedString = cyclicShift(new CyclicShifter_1.CyclicShifter(), stringToShift);
    else if (parsedDesc.length)
        parsedDesc.forEach((desc) => {
            const shifted = cyclicShift(new CyclicShifter_1.CyclicShifter(), desc);
            shiftedDesc.push(shifted);
        });
    if (shiftedString.length) {
        req.ShiftedString = shiftedString;
        next();
    }
    else if (shiftedDesc.length) {
        req.shiftedDesc = shiftedDesc;
        next();
    }
    else
        next(new Error("There was no String to shift. Please add input."));
};
const cyclicShift = (stringShifter, stringToShift) => {
    return stringShifter.setupAndShift(stringToShift);
};
