"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const User_1 = require("../controller/User");
const express_1 = __importDefault(require("express"));
exports.api = express_1.default.Router();
// Defining routes and controllers
exports.api.get("/allUsers", User_1.getUsers);
exports.api.get('/getUser/:id', User_1.getUserById);
exports.api.put("/updateUser/:id", User_1.updateUser);
exports.api.delete("/deleteUser/:id", User_1.deleteUser);
exports.api.post("createUser", User_1.createUser);
//# sourceMappingURL=User.js.map