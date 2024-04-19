import mongoose, { Schema } from 'mongoose';
import { IUserRole } from '../../interfaces/IUserRole';

const UserRoleSchema: Schema = new Schema<IUserRole>({
  userRolename: { type: String, required: true },
});

const UserRoleModel = mongoose.model<IUserRole>('UserRole', UserRoleSchema);
export default UserRoleModel;
