import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const profileSchema = new Schema({

    userName: { type: String, required:true },
    profilepicture: {type: String},
    location: {type: String, required:true}

    // lostItem: [{ type: Types.ObjectId, ref: 'lostModel' }],
    // foundItem: [{ type: Types.ObjectId, ref: 'foundModel' }],
    
}, {
    timestamps: true
});
profileSchema.plugin(toJSON)
export const ProfileModel = model('profile', profileSchema);
