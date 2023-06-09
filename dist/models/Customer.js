"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const customerModel = new mongoose_1.Schema({
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    verified: {
        type: Boolean,
        required: true,
    },
    addrress: { type: String, required: true },
    otp: { type: Number, required: true },
    otp_expiry: { type: Date, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    foods: [{ type: mongoose_1.default.SchemaTypes.ObjectId, ref: "foods" }],
}, {
    toJSON: {
        //this means when this information is outputed during a get method in the res.status().json(), the following fields password, salt,__v, createdAt and updatedAt should not be displayed
        transform(doc, ret) {
            // delete ret.password,
            delete ret.__v,
                //delete ret.salt,
                delete ret.createdAt;
            delete ret.updatedAt;
        },
    },
    timestamps: true,
});
const Customer = (0, mongoose_1.model)("customer", customerModel);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map