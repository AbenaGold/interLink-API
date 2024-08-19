import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const itemSchema = new Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String },
    category: {type:String, enum:['Lost Item', 'Found Item']},
    createdAt: { type: Date, default: Date.now() },
    postedBy: { type: Types.ObjectId, required: true, ref: 'User' },
}, {
    timestamps: true

});

itemSchema.plugin(toJSON);

export const itemModel = model('Item', itemSchema);