import { model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const itemSchema = new Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    locationLost: { type: String, required: true },
    dateLost: { type: Date },
    image: { type: String },
    postType: {type:String, enum:['Lost Item', 'Found Item']},
    createdAt: { type: Date, default: Date.now() },
    postedBy: { type: Types.ObjectId, required: true, ref: 'User' },
}, {
    timestamps: true

});

itemSchema.plugin(toJSON);

export const itemModel = model('Item', itemSchema);