"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const first_controller_1 = require("@/controllers/first.controller");
const router = (0, express_1.Router)();
router.get('/first', first_controller_1.first);
exports.default = router;
//# sourceMappingURL=first.routes.js.map