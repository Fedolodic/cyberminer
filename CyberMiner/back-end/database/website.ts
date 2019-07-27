import * as mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
    link: String,
    url: String,
    description: String,
    payments: Number,
    visits: Number
});

export const Website = mongoose.model("Website", websiteSchema);

Website.find();