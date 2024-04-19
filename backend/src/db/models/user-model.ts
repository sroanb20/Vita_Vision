import mongoose, { Schema } from "mongoose";
import { IUser } from '../../interfaces/IUser';

const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mail: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: 'UserRole', required: true }
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
