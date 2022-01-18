import { Service } from "typedi";
import mongoose from "mongoose";
import { getModelForClass, getModelWithString, ReturnModelType } from "@typegoose/typegoose";

@Service()
export class MongoService{
    private _mongoClient: typeof mongoose;

    constructor(){

    }

    public async connect(url: string){
        this._mongoClient = await mongoose.connect(url);
    }

}