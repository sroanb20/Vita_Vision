import mongoose, { Schema } from "mongoose";
import { IMemberRole } from "../../interfaces/IMemberRole";

const MemberRoleSchema: Schema = new Schema<IMemberRole>({
    memberRoleName: { type: String, required: true },
  });
  
  const MemberRoleModel = mongoose.model<IMemberRole>('MemberRole', MemberRoleSchema);
  export default MemberRoleModel;