import { CyclicShifter } from "./CyclicShifter";
import { KwicRequestHandler } from "./KwicRequestHandler";

// shifter middleware 
export const apiCyclicShifter:KwicRequestHandler = (req, res, next) => {
    let stringToShift:any = req.ParsedString;
    let parsedDesc:any = req.parsedDesc; // get string to shift
    let shiftedString:string[][][] = [];
    let shiftedDesc:string[][][][] = [];

    // if not undefined the shift and send to next piece of middleware
    if(typeof(stringToShift) != "undefined")
        shiftedString = cyclicShift(new CyclicShifter(), stringToShift);
    else if(parsedDesc.length)
        parsedDesc.forEach((desc:any) => {
            const shifted = cyclicShift(new CyclicShifter(), desc);
            shiftedDesc.push(shifted);
    });

    if(shiftedString.length) {
        req.ShiftedString = shiftedString;
        next();
    } else if (shiftedDesc.length) {
        req.shiftedDesc = shiftedDesc;
        next();
    }
    else
        next(
            new Error("There was no String to shift. Please add input."
        ));
}

const cyclicShift = 
    (stringShifter:CyclicShifter, stringToShift:string[][]) => {
        return stringShifter.setupAndShift(stringToShift);
}