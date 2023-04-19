"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserById = exports.createUser = exports.getUsers = void 0;
const User_1 = require("../model/User");
const mongoose_1 = require("mongoose");
const getUsers = (req, res) => {
    res.status(200).send({ ok: "ok" });
};
exports.getUsers = getUsers;
const createUser = (req, res) => {
    const User = (0, mongoose_1.model)('User', User_1.userSchema);
};
exports.createUser = createUser;
const getUserById = (req, res) => { };
exports.getUserById = getUserById;
const deleteUser = (req, res) => { };
exports.deleteUser = deleteUser;
const updateUser = (req, res) => { };
exports.updateUser = updateUser;
//# sourceMappingURL=User.js.map