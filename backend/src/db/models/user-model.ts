import {IUser} from "../interfaces/IUser";
import {model, Schema} from "mongoose";


const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const IUserModel = model<IUser>('User', userSchema);

export default IUserModel;