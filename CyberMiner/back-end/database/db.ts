import * as mongoose from "mongoose";

export function connectMongo() {
    mongoose.connect("mongodb+srv://fedoledi_westbrook:fedoledi_westbrook@cluster0-nd9rj.mongodb.net/test?retryWrites=true&w=majority");
}