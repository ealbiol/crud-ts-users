import { getUserById, updateUser, deleteUser, createUser, getUsers} from '../controller/User';
import express from 'express';

export const api = express.Router();

// Defining routes and controllers
api.get("/allUsers/:page", getUsers);
api.get('/getUser/:id', getUserById);
api.put("/updateUser/:id", updateUser);
api.delete("/deleteUser/:id", deleteUser);
api.post("/createUser", createUser);

