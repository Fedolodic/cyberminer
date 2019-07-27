import * as mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
    link: String,
    url: String,
    description: String,
    payments: Number,
    visits: Number
});

export const Website = mongoose.model("Website", websiteSchema);

const testData1:Object = {
    link: "https://www.google.com",
    url: "1google.com",
    description:"google",
    payments:0,
    visits:1
};


const testData2:Object = {
    link: "https://www.google.com",
    url: "2google.com",
    description:"google",
    payments:0,
    visits:2
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
