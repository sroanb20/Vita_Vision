import { Schema, model } from 'mongoose';
import {ILecture} from "../../interfaces/ILecture";

const lectureSchema = new Schema<ILecture>({
    lectureType: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vonDate: {
        type: String,
        required: true
    },
    bisDate: {
        type: String,
        required: true
    }
});

const Lecture = model<ILecture>('Lecture', lectureSchema);

export default Lecture;
