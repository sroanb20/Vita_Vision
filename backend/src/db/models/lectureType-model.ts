import { Schema, model, Document } from 'mongoose';
import {ILectureType} from "../../interfaces/ILectureType";


const lectureType = new Schema<ILectureType>({

    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});


const LectureType = model<ILectureType>('lecturetype', lectureType);

export default LectureType;
