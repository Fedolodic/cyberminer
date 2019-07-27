import mongoose from "mongoose";

export function connectMongo() {
    mongoose.connect("mongodb+srv://fedoledi_westbrook:fedoledi%5Fwestbrook@cluster0-nd9rj.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})
        .then(() => console.log("Connected to Mongo"))
        .catch(error => {console.log(error)});
}