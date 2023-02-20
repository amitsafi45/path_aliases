"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const first_routes_1 = __importDefault(require("./routes/first.routes"));
const app = (0, express_1.default)();
app.use(first_routes_1.default);
app.listen(2000, () => {
    console.log('i am in runinig');
});
//# sourceMappingURL=index.js.map