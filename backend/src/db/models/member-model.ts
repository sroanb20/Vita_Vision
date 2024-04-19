import mongoose, {Schema, Types} from "mongoose";
import {IMember} from "../../interfaces/IMember";

const MemberSchema: Schema = new Schema<IMember>({
  userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
  lectureId: {type: Schema.Types.ObjectId, required: true, ref: 'Lecture'},
  roleId: {type: Schema.Types.ObjectId, required: true, ref: 'Role'},
});

const Member = mongoose.model<IMember>('Member', MemberSchema);
export default Member;