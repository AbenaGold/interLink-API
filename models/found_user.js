import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const foundItemSchema = new Schema ({
    itemName: { type: String, required: true},
    Descrtiption: {type: String, required: true, unique: true},
    locationFound: {type: String, required: true},
    image: { type: String },
    // createdAt: { type: Date, default: Date.now()}
},{
    timestamps: true

});

userSchema.plugin(toJSON);

export const foundModel = model('User', foundItemSchema);