import { userModel, userSchema } from "../model/User";
import { model } from "mongoose";
import { IUser } from "../interfaces/User";
const User = model<IUser>('Users', userSchema);
const _RECORDS_PER_PAGE = 15;

export const getUsers = async (req, res) => {
    console.log("req params", req.params);
    const skipRecords = req.params.page * _RECORDS_PER_PAGE;
    const users = await userModel.find().skip(skipRecords).limit(_RECORDS_PER_PAGE)

    res.status(200).send(users);
};
export const createUser = async (req, res) => {
    const user = new User();
    user.id = 3333;
    user.first = "TEST";

    user.email = "test"
    user.last = "test"
    user.company = "test"
    user.created_at = new Date()
    user.country = "test"
    const userStored = await user.save();
    res.status(200).send(userStored);
};
export const getUserById = (req, res) => { };
export const deleteUser = (req, res) => { };
export const updateUser = (req, res) => { };



