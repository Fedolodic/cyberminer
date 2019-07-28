import * as mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
    link: String,
    url: String,
    description: String,
    payments: Number,
    visits: Number,
    shiftedLines:[String]
});

export const Website = mongoose.model("Website", websiteSchema);

const testData1:Object = {
    link: "https://www.google.com",
    url: "1google.com",
    description:"google",
    payments:0,
    visits:1,
    shiftedLines: [
        "cool is google",
        "google is cool",
        "is cool google"
    ]
};


const testData2:Object = {
    link: "https://www.google.com",
    url: "2google.com",
    description:"google is cool",
    payments:0,
    visits:2,
    shiftedLines: [
        "cool is google",
        "google is cool",
        "is cool google"
    ]
};

Website.find().then(data => {
    if(data.length == 0) {
        new Website(testData1).save()
        .then(data => console.log("saved"))
        .catch(error => console.log(error));
        new Website(testData2).save()
        .then(data => console.log("saved"));
    };
});