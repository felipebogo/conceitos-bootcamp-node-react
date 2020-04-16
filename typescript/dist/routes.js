"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({ name: 'felipe', email: 'felipebogo@gmail.com', password: '12345' });
    return response.json({ message: "Helllo World", user: user });
}
exports.helloWorld = helloWorld;
