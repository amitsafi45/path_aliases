"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const second_controller_1 = require("../controllers/second.controller");
const router = (0, express_1.Router)();
router.get('/first', second_controller_1.second);
exports.default = router;
//# sourceMappingURL=second.routes.js.map