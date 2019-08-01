import { CyberMinerRequestHandler } from "../classes/CyberMinerRequestHandler";
const autocorrect = require('autocorrect')();

export const apiAutoCorrect:CyberMinerRequestHandler = (req, res, next) => {
    console.log(req.body.autoCorrect)
    res.json({autoCorrect: autocorrect(req.body.autoCorrect)});
}
