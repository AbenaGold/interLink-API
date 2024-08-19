import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const userSchema = new Schema({

    firstName: { type: String, required: true},
    lastName: { type: String, require:true },
    // userName: { type: String, required:true },
    email: { type: String, required: true , unique: true },
    phoneNumber:{type: String, required: true},
    password: { type: String, required: true },
    // lostItem: [{ type: Types.ObjectId, ref: 'lostModel' }],
    // foundItem: [{ type: Types.ObjectId, ref: 'foundModel' }],
    
}, {
    timestamps: true
});
userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema);


