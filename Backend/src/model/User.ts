import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/User';

// 2. Create a Schema corresponding to the document interface.
export const userSchema = new Schema<IUser>({
    id: { type: Number },
    first: { type: String, required: true },
    email: { type: String, required: true },
    last: { type: String, required: true },
    company: { type: String, required: true },
    created_at: { type: Date, required: true },
    country: { type: String, required: true },
});

export const  userModel = model("users", userSchema);