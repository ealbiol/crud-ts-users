"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
exports.userSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    first: { type: String, required: true },
    email: { type: String, required: true },
    last: { type: String, required: true },
    company: { type: String, required: true },
    created_at: { type: Date, required: true },
    country: { type: String, required: true },
});
//# sourceMappingURL=User.js.map