import { userModel, userSchema } from "../model/User";
import { model } from "mongoose";
import { IUser } from "../interfaces/User";
const User = model<IUser>('Users', userSchema);
const _RECORDS_PER_PAGE = 15;

export const getUsers = async (req, res) => {
    const skipRecords = req.params.page * _RECORDS_PER_PAGE;
    const users = await userModel.find().sort([['created_at', -1]]).skip(skipRecords).limit(_RECORDS_PER_PAGE)

    res.status(200).send(users);
};
export const createUser = async (req, res) => {
    const user = new User();
    const { id, first, email, last, company, country } = req.body;
    try {
        user.id = id;
        user.first = first;
        user.email = email,
            user.last = last;
        user.company = company;
        user.created_at = new Date();
        user.country = country;

        const userStored = await user.save();
        if (!userStored) {
            res.status(500).send({ error: "Not stored" });
        }
        res.status(200).send(userStored);
    } catch (error) {
        res.status(500).send(error)
    }
};
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    res.status(200).send(result);
};
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first, email, last, company, country } = req.body;
    try {
        const data = {
            first,
            email,
            last,
            company,
            country
        }
        const userStored = await User.findByIdAndUpdate(id, data);
        if (!userStored) {
            res.status(500).send({ error: "Not stored" });
        }
        res.status(200).send(userStored);
    } catch (error) {
        res.status(500).send(error)
    }
};



