import express from "express";
import Member from "../db/models/member-model";
import MemberRole from "../db/models/memberRole-model";
import Lecture from "../db/models/lecture-model";
import User from "../db/models/user-model";
import UserRole from "../db/models/userRole-model";
import LectureType from "../db/models/lectureType-model";


const getRouter = express.Router();

getRouter.get('/getMembers', async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Members', error });
  }
});

getRouter.get('/getMemberRoles', async (req, res) => {
  try {
    const memberRoles = await MemberRole.find();
    res.status(200).json(memberRoles);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der MemberRoles', error });
  }
});

getRouter.get('/getLectures', async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Lectures', error });
  }
});

getRouter.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Users', error });
  }
});

getRouter.get('/getUserRoles', async (req, res) => {
  try {
    const userRoles = await UserRole.find();
    res.status(200).json(userRoles);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der UserRoles', error });
  }
});

getRouter.get('/getLectureTypes', async (req, res) => {
  try {
    const lectureTypes = await LectureType.find();
    res.status(200).json(lectureTypes);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der LectureTypes', error });
  }
});

module.exports = getRouter;
